class B2bVariantFetcher < ChannelVariantFetcher
  def variant_ids
    gecko.Variant.where(b2b: true, active:true).map { |v| v["id"] }
  end
end