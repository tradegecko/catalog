require 'oauth_session'
class SessionsController < ApplicationController
  before_action :authenticate_user!, only: :destroy

  def create
    user = User.find_or_create_from_omniauth(auth)
    token = OAuth2::AccessToken.new(OAuthSession.oauth_client,
      auth["credentials"]["token"],
      auth["credentials"].slice("refresh_token", "expires_at")
    )
    user.update_from_access_token(token)
    session[:user_id] = user.id
    redirect_to '/'
  end

  def destroy
    clear_session
    render inline: "You have been logged out"
  end

private
  def auth
    request.env["omniauth.auth"]
  end
end
