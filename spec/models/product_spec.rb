require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'Validations' do

    before do
      # will create a category instance before each call as they are all the same. to keep code DRY.
      @category = Category.create(name: 'Test Category')
    end
    
    it 'successfully saves the product when all four fields are provided.' do
      @product = Product.new(
        name: 'Cactus',
        price: 50.66,
        quantity: 20,
        category: @category
      )
      expect(@product.save).to be true
    end

    it 'does not save product when name is missing.' do 
      @product = Product.new(
        name: nil,
        price: 50.56,
        quantity: 20,
        category: @category
      )
      expect(@product.save).to be false
      expect(@product.errors.full_messages).to include("Name can't be blank")
    end

    it 'does not save product when price is missing.' do 
      @product = Product.new(
        name: 'cactus',
        # price: nil,
        quantity: 20,
        category: @category
      )
      expect(@product.save).to be false
      expect(@product.errors.full_messages).to include("Price can't be blank")
    end

    it 'does not save product when quantity is missing.' do 

      @product = Product.new(
        name: 'cactus',
        price: 40.88,
        quantity: nil,
        category: @category
      )
      expect(@product.save).to be false
      expect(@product.errors.full_messages).to include("Quantity can't be blank")
  
    end

    it 'does not save product when category is missing.' do 
      @product = Product.new(
        name: 'cactus',
        price: 40.30,
        quantity: 8,
        category: nil
      )
     
      expect(@product.save).to be false
      expect(@product.errors.full_messages).to include("Category can't be blank")
    end
  end
end

# new_test = Product.new :name => "A", :price => 19:99, :quantity => 10
# new_test.category = @test_category