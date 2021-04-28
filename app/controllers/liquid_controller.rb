# frozen_string_literal: true

class LiquidController < ApplicationController
  include VariantsFetcher

  def index
    uri = URI('https://gist.githubusercontent.com/billybonks/41ccddfb51293cd89a9d798bf2252d7a/raw/f97441467b7c9e8483197be2b3f106cbe456ab67/whatsapp_template.liquid')
    template_string = Net::HTTP.get(uri)
    template = Liquid::Template.parse(template_string)
    
    context = {
      variants: variants.map { |v| v.to_h.stringify_keys }
    }
    value = template.render(context.stringify_keys)
    render inline: value
  end
end
