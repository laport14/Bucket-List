Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  resources :activities do
  resources :comments

  # put '/comments/:comment_id/activities/:id', to: 'activities#add_comment'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
