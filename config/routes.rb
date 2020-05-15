# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
    resources :airframes
    resources :attitudes
    resources :pids
    resources :plugins
end
