Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'pages#main'   , as: :main

  get '/pages/my_page'   , to: "pages#my_page"   , as: :my_page
  get '/pages/components', to: "pages#components", as: :components
  
  resources :movies, only: %i[new create show edit update index destroy] do
    collection do
      get 'search'
    end
  end

end
