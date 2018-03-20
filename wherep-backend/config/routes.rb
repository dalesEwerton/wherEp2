Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace 'api' do
    resources :series
    resources :users
    post 'login' => 'users#login'
  end



end
