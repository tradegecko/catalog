class VariantFetcher

  def initialize(user)
    @user = user
  end

  def oauth_session
    @oauth_session ||= OAuthSession.new(@user)
  end

  def gecko
    @gecko ||= oauth_session.gecko
  end

  def variants
    raw_variants
    image_map = @images.each_with_object({}) { |image, obj| obj[image["id"]] = image }
    raw_variants.each do |variant|
      primary_image = image_map[variant["image_ids"][0]]
      variant["primary_image_url"] =  "#{primary_image["base_path"]}/#{primary_image["file_name"]}" if primary_image
      variant["strike_price"] = variant["prices"][strike_price_id]
      variant["sell_price"] = variant["prices"][sell_price_id]
    end
  end

  def raw_variants
    @variants ||= begin
      gecko.Variant.where(limit: 250, include: :images)
      @images = gecko.Variant.last_response.parsed["images"]
      gecko.Variant.last_response.parsed["variants"]
    end
  end

  def variants_in_filter(filter_id, query)
    filter = gecko.access_token.request(:get, "filter_tabs/#{filter_id}").parsed
    params = filter_id.present? ? (filter["filter_tab"]["filters_data"].each_with_object({}) do |property, obj|
      obj[property["property"].underscore.to_sym] = property["values"]
    end) : {}
    gecko.Variant.where(params.merge(limit: 250, q: query))
    gecko.Variant.last_response.parsed["variants"]
  end

  def liquid_variants
    raise NotImplementedError
  end

  def variant_ids
    raise NotImplementedError
  end

  def sell_price_id
    'retail'
  end

  def strike_price_id
    'retail'
  end

end
