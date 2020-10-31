Rails.application.routes.draw do
  resources :books, only: [:index, :create, :destroy]
  root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
