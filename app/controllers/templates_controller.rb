class TemplatesController < ApplicationController
  def index
    render json: { templates: current_user.templates.as_json }
  end
end
