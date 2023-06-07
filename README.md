# Jungle

A mini e-commerce application built with Rails 6.1. The application enables shoppers to purchase plants by browsing through the home page to see all plants available, filtering by categories available in the navbar to shop plants in a particular category as well as view individual plant pages with their relevant details.

Certain functions(contained in the admin dashboard) are only available to the Admin who need to be authenticated to have access to add and delete products, create categories and view a dashboard of all available products.

## App Images

!["screenshot of Homepage"](https://github.com/oashitta/jungle-rails/blob/master/docs/Homepage.png?raw=true)
!["screenshot of Homepage product display"](https://github.com/oashitta/jungle-rails/blob/master/docs/Home_page_product_layout.png?raw=true)
!["screenshot of My cart"](https://github.com/oashitta/jungle-rails/blob/master/docs/My_cart.png?raw=true)
!["screenshot of Admin dashboard"](https://github.com/oashitta/jungle-rails/blob/master/docs/Admin_dashboard.png?raw=true)
!["screenshot of Admin- add and view all products"](https://github.com/oashitta/jungle-rails/blob/master/docs/Admin_add_and_view_all_products.png?raw=true)
!["screenshot of Payment Modal"](https://github.com/oashitta/jungle-rails/blob/master/docs/Payment_page.png?raw=true)

## Getting Started

1. Clone repo from github.
2. Run `bundle install` to install dependencies
3. Create `config/database.yml` by copying `config/database.example.yml`
4. Create `config/secrets.yml` by copying `config/secrets.example.yml`
5. Run `bin/rails db:reset` to create, load and seed db
6. Create .env file based on .env.example
7. Sign up for a Stripe account
8. Put Stripe (test) keys into appropriate .env vars
9. Run `rails s` to start the server

## Database

If Rails is complaining about authentication to the database, uncomment the user and password fields from `config/database.yml` in the development and test sections, and replace if necessary the user and password `development` to an existing database user.

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe - payment provider
- Cypress 9.7.0
  rspec-rails 5.1
