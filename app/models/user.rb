class User < ApplicationRecord
  has_secure_password

  def self.authenticate_with_credentials(email = nil, password = nil)
    return nil if email.nil? || password.nil?
    # strip to remove any leading/trailing whitespaces and downcase convert email to lowercase.
    user = User.find_by(email: email.strip.downcase)
    return nil unless user

    user.authenticate(password) ? user : nil
  end

  validates :first_name,  presence: true
  validates :last_name,  presence: true
  validates :email, presence: true, uniqueness: {case_sensitive: false}
  validates :password, presence: true, length: {minimum: 6}
  validates :password_confirmation, presence: true

end
