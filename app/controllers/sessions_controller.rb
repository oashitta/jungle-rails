class SessionsController < ApplicationController

  def new
  end

  def create
    # user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    # if user && user.authenticate(params[:password])
    
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      # redirect_to root_path
      redirect_to '/'
      # fallback_location: root_path
    else
    # If user's login doesn't work, send them back to the login form.
      flash[:error] = 'Incorrect email or password.'
      # redirect_to new_session_path
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    # redirect_to new_session_path
    redirect_to '/login'
  end

end
