Rails.application.routes.draw do
  get 'products/index'
  get 'products/show'
  get 'products/new'
  get 'products/edit'
  get 'products/create'
  get 'products/update'
  get 'products/destroy'
  root 'static_pages#home'
  devise_for :users
  get '/home', to: 'static_pages#home'
end
