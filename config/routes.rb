Rails.application.routes.draw do
  resources :activities
  root 'pages#index'
  get 'about', to: 'pages#about'
end
