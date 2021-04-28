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
    @variants ||= begin
      gecko.Variant.where(limit: 250)
      gecko.Variant.last_response.parsed["variants"]
    end
  end

  def variants_in_filter(filter_id)
    filter = gecko.access_token.request(:get, "filter_tabs/#{filter_id}").parsed
    params = filter["filter_tab"]["filters_data"].each_with_object({}) do |property, obj|
      obj[property["property"].underscore.to_sym] = property["values"]
    end
    gecko.Variant.where(params.merge(limit: 250))
    gecko.Variant.last_response.parsed["variants"]
  end

  def liquid_variants
    raise NotImplementedError
  end

  def variant_ids
    raise NotImplementedError
  end

  def sell_price_id
    raise NotImplementedError
  end

  def strike_price_id
    raise NotImplementedError
  end

end
