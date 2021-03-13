Rails.application.routes.draw do

  resources :departments do
    resources :products
  end
  root 'static_pages#home'
  devise_for :users
  get '/home', to: 'static_pages#home'
end
