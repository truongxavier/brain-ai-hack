# This file defines the routes for the Rails application.
# It uses the Rails routing DSL to map URLs to controller actions.

Rails.application.routes.draw do
  devise_for :users

  # Sets the root URL to the "home" action of the "pages" controller.
  root to: "pages#home"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the routes for the "nodes" resource.
  resources :nodes, only: %i[index create show update destroy] do
    resources :prompts, only: %i[create]
  end

  # Mounts the Sidekiq web interface at "/sidekiq" for admin users.
  # Only users with admin privileges can access this route.
  authenticate :user do
    mount Sidekiq::Web => '/sidekiq'
  end

  # Defines the root path route ("/").
  # This route maps to the "index" action of the "posts" controller.
  # root "posts#index"
end
