require 'oauth_session'
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  rescue_from OAuth2::Error do |exception|
    redirect_to "/auth/tradegecko"
  end

private

  def authenticate_user!
    redirect_to "/auth/tradegecko" unless user_signed_in?
  end

  def user_signed_in?
    !!session[:user_id]
  end

  def clear_session
    session.delete(:user_id)
  end

  helper_method :current_user
  def current_user
    return unless user_signed_in?
    @current_user ||= User.find(session[:user_id])
  end

  def gecko
    @gecko ||= oauth_session.gecko
  end

  def oauth_session
    @oauth_session ||= OAuthSession.new(current_user)
  end
end

