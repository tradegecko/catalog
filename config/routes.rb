Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get '/api/*path', to: 'proxy#index'
  post '/api/*path', to: 'proxy#create'
  put   '/api/*path', to: 'proxy#update'
  delete '/api/*path', to: 'proxy#delete'

  constraints lambda { |request| request.session.key?(:user_id) } do
    mount_ember_app :frontend, to: "/"
  end

  root to: redirect('/auth/tradegecko'), as: :unauthenticated_root
end
