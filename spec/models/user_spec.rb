require 'rails_helper'

RSpec.describe User, type: :model do

  describe "password" do
    it 'it should save when all fields are provided' do
      @user = User.new(
        first_name: 'john',
        last_name: 'doe',
        email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin'
      )
      expect(@user.save).to be true
    end

    it 'password and password confirmation fields must match' do
      @user = User.new(
        first_name: 'john',
        last_name: 'doe',
        email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin12.'
      )
      expect(@user.save).to be false
    end

    it 'must have a minimum length of 6 characters' do
      @user = User.new(
        first_name: 'john',
        last_name: 'doe',
        email: 'john@doe.com',
        password: 'sign',
        password_confirmation:'signin12.'
      )
      expect(@user.save).to be false
    end
  end

  describe "user_details" do

    it 'First name cannot be empty' do
      @user = User.new(
        # first_name: "John",
        last_name: 'doe',
        email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin'
      )
      expect(@user.save).to be false
    end

    it 'Last name cannot be empty' do
      @user = User.new(
        first_name: 'John',
        # last_name: 'Doe',
        email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin'
      )
      expect(@user.save).to be false
    end

    it 'Email cannot be empty' do
      @user = User.new(
        first_name: 'John',
        last_name: 'doe',
        # email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin'
      )
      expect(@user.save).to be false
    end

  end

  describe "email" do
    it 'must be unique and not case sensitive' do
      @user1 = User.new(
        first_name: 'John',
        last_name: 'doe',
        email: 'john@doe.com',
        password: 'signin',
        password_confirmation:'signin'
      )

      @user2 = User.new(
        first_name: 'John',
        last_name: 'doe',
        email: 'JOHN@DOE.com',
        password: 'signin',
        password_confirmation:'signin'
      )

      expect(@user1.save).to be true
      expect(@user2.save).to be false
    end

    # it 'must require first name and last name' do
    # end

  end

end
