# frozen_string_literal: true

class VariantsController < ApplicationController
  include VariantsFetcher

  def index
    render json: {variants: variants}
  end
end