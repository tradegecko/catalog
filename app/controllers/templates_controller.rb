class TemplatesController < ApplicationController
  def index
    render json: current_user.templates.as_json
  end
end
