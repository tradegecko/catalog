# frozen_string_literal: true

module VariantsFetcher
  extend ActiveSupport::Concern

  def variants
    filter_id = params["filter_id"];
    if (filter_id || '').empty?
      adapter.variants
    else
      adapter.variants_in_filter(filter_id)
    end
  end

  def adapter
    channel_id = params["channel_id"];
    if (channel_id || '').empty?
      VariantFetcher.new(current_user)
    else
      # in the longer term we would cache the channel catalogues so we dont have to do this fetch
      gecko = OAuthSession.new(current_user).gecko
      response = gecko.access_token.request(:get, "/channels/#{channel_id}").parsed
      channel = response[response.keys.first]
      if channel["type"] != 'iguana'
       ChannelVariantFetcher.new(current_user,channel_id)
      else
        B2bVariantFetcher.new(current_user,channel_id)
      end
    end
  end
end
