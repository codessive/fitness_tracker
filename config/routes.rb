Rails.application.routes.draw do
  devise_for :users
  resources :activities
  root 'activities#index'
  get 'about', to: 'pages#about'
end
