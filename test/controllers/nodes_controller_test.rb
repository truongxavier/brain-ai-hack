require "test_helper"

class NodesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get nodes_index_url
    assert_response :success
  end

  test "should get create" do
    get nodes_create_url
    assert_response :success
  end

  test "should get show" do
    get nodes_show_url
    assert_response :success
  end

  test "should get destroy" do
    get nodes_destroy_url
    assert_response :success
  end

  test "should get update" do
    get nodes_update_url
    assert_response :success
  end
end
