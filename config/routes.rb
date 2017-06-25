Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :posts, only: [:index, :show, :create, :destroy]
  end

end
