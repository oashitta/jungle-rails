class Admin::DashboardController < ApplicationController
  http_basic_authenticate_with name: ENV["HTTP_BASIC_USERNAME"],
                              password: ENV["HTTP_BASIC_PASSWORD"],
                              if: -> { ENV["HTTP_BASIC_PASSWORD"].present? }
  def show
    @product_count = Product.count
    @category_count = Category.count
  end
end

