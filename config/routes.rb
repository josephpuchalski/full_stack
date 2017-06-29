Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :posts, only: [:index, :show, :create, :destroy]
    resources :follows, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end

end
