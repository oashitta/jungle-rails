class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def authenticate_with_credentials(email, password)
    # strip to remove any leading/trailing whitespaces and downcase convert email to lowercase.
    user = User.find_by(email: email.strip.downcase)
    return nil unless user

    user.authenticate(password) ? user : nill
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      # redirect_to root_path
      redirect_to '/'
      # fallback_location: root_path
    else
      # If params is missing. send back to signup form
        flash[:error] = 'Field missing'
        redirect_to '/signup'
        # redirect_to new_user_path
        # redirect_to ':new'
    end
  end  
  
  private

  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :email, 
      :password, 
      :password_confirmation)
  end

end
