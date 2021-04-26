class ProxyController < ApplicationController
  before_action :authenticate_user!

  def index
    response = gecko.access_token.request(:get, params.delete(:path), params: params.except(:action, :controller, :format))
    render json: response.parsed
  end

  def create
    response = gecko.access_token.request(:post, params.delete(:path), body: cleaned_params)
    render json: response.parsed
  rescue OAuth2::Error => ex
    render json: ex.response.parsed, status: ex.response.status
  end

  def update
    response = gecko.access_token.request(:put, params.delete(:path), body: cleaned_params)
    render json: response.parsed
  rescue OAuth2::Error => ex
    render json: ex.response.parsed, status: ex.response.status
  end

private

  def authenticate_user!
    render json: { type: "Unauthorized", message: "Sign in to continue" }, status: :unauthorized unless user_signed_in?
  end

  def cleaned_params
    params.except(:action, :controller, :format, :proxy).permit!.to_unsafe_h
  end
end
