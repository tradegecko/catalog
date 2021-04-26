require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "requires authentication" do
    get "/logout"
    assert_response 302
  end

  test "works with authentication" do
    sign_in users(:one)
    get "/logout"
    assert_response 200
  end
end
