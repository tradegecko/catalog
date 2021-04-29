class User < ApplicationRecord
  has_many :templates

  def self.find_or_create_from_omniauth(auth)
    self.where(tg_login_id: auth.info.login_id).first_or_create
  end

  def update_from_access_token(access_token)
    self.access_token  = access_token.token
    self.refresh_token = access_token.refresh_token
    self.expires_at    = access_token.expires_at
    self.save
  end
end
