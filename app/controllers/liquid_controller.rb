# frozen_string_literal: true

class LiquidController < ApplicationController
  include VariantsFetcher

  def index
    uri = URI(Template.find(params[:template_id]).url)
    template_string = Net::HTTP.get(uri)
    template = Liquid::Template.parse(template_string)
    
    context = {
      variants: variants.map { |v| v.to_h.stringify_keys }
    }
    value = template.render(context.stringify_keys)
    render inline: value
  end
end
