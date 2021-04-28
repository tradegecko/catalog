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
      ChannelVariantFetcher.new(current_user,channel_id)
    end
  end
end
