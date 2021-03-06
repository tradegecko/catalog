class ChannelVariantFetcher < VariantFetcher

  def initialize(user, channel_id)
    @user = user
    @channel_id = channel_id
  end

  def sell_price_id
    channel["price_list_id"]
  end

  def strike_price_id
    channel["compare_at_price_list_id"]
  end

  def raw_variants
    @raw_variants ||= begin
      params = {ids: variant_ids,include: :images} 
      response = oauth_session.gecko.access_token.request(:get, 'variants', params: params).parsed
      @images = response["images"]
      response["variants"]
    end
  end

  def channel
    @channel ||= begin
      response = gecko.access_token.request(:get, "/channels/#{@channel_id}").parsed
      response[response.keys.first]
    end
  end

  def variants_in_filter(filter_id, query)
    variants_in_filter=super(filter_id, query)
    published_variants=variants
    variants_in_filter_ids = variants_in_filter.map { |variant| variant["id"] }
    published_variants_ids = published_variants.map { |variant| variant["id"] }
    intersected_ids = published_variants_ids & variants_in_filter_ids
    published_variants.filter { |variant| intersected_ids.include?(variant["id"]) }
  end

  def variant_ids
    response = oauth_session.gecko.access_token.request(:get, "/channel_references?channel_id=#{channel["id"]}&owner_type=Variant").parsed
    response["channel_references"].map { |v| v["owner_id"] }
  end

end