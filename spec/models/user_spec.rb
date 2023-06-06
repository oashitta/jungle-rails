require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do 
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
    end
  end 


  describe 'authenticate_with_credentials' do
    email = 'john@doe.com' 
    password = 'signin'

  
    let!(:user) do
      User.create(
        first_name: 'John',
        last_name: 'Doe',
        email: email,
        password: password,
        password_confirmation: password
      )
    end

    it 'should return nil if email does not exist' do
      expect(User.authenticate_with_credentials('doesnot@exist.com', password)).to be_nil
    end
    
    it 'should return nil if wrong password is provided' do
      expect(User.authenticate_with_credentials(email, 'wrongpassword')).to be_nil
    end

    it 'should return nil if password is not provided' do
      expect(User.authenticate_with_credentials(user.email)).to be_nil
    end

    it 'should return nil if email is not provided' do
      expect(User.authenticate_with_credentials(user.password)).to be_nil
    end

    it 'should return nil if email and password are not provided' do
      expect(User.authenticate_with_credentials()).to be_nil
    end
    
    it 'should return user if email and password are correct' do
      expect(User.authenticate_with_credentials(email, password)).to eql(user)
    end


    it "should login and return user if there are trailing spaces before email address" do
      expect(User.authenticate_with_credentials(' john@doe.com', password)).to eql(user)
    end

    it "should login return user if there are wrong cases in email address" do
      expect(User.authenticate_with_credentials('joHn@doe.cOm', password)).to eql(user)
    end
  end

end
