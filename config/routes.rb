Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users

    resources :tournaments do
      resources :games
    end

    resources :games do
      resources :teams
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
