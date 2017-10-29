Rails.application.routes.draw do
  devise_for :users

  resources :users

  namespace :api do
    namespace :v1 do
      resources :groups
    end
  end

  root 'static_pages#index'
end
