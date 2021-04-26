require 'test_helper'

class ProxyControllerTest < ActionDispatch::IntegrationTest
  test "requires login" do
    get "/api/products"
    assert_response :unauthorized
  end
end
