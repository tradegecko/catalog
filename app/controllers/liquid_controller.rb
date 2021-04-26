# frozen_string_literal: true

class LiquidController < ApplicationController

  def index
    template = Liquid::Template.parse(File.read(File.join(Rails.root, 'templates', 'text.liquid')))
    variants = gecko.Variant.where(online_ordering:true)
    context = {
      variants: variants.map { |v| v.to_h.stringify_keys }
    }
    value = template.render(context.stringify_keys)
    render inline: value
  end
end
