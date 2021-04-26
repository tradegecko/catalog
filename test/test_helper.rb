ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/pride'
require 'dotenv'
require 'webmock/minitest'

Dotenv.load(".test.env", ".env")
Dir[Rails.root.join("test/support/**/*")].each { |f| require f }
ENV['TRADEGECKO_API_URL'] ||= 'http://api.lvh.me:3000'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  def sign_in(user)
    stub_request(:get, "#{ENV['TRADEGECKO_API_URL']}/accounts/current").to_return(status: 200, headers: {'Content-Type' => 'application/json' }, body: { account: { time_zone: "Pacific/Honolulu" }}.to_json)
    get '/auth/developer/callback', params: {
      account_id: user.tg_login_id,
      login_id: user.tg_login_id,
      credentials: {
        token: 'ABC',
        refresh_token: 'ABC',
        expires_at: 2.hours.from_now.to_i
      }
    }
  end
end
