Rails.application.routes.draw do
  get 'prompts/create'
  get 'nodes/index'
  get 'nodes/create'
  get 'nodes/show'
  get 'nodes/destroy'
  get 'nodes/update'
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  resources :nodes, only: %i[index create show update destroy] do
    resources :prompts, only: %i[create]
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
