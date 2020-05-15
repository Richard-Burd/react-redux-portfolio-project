Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :airframes
end


# Once everything's working it should look like this:

# Rails.application.routes.draw do
#   resources :airframes do
#     resources :attitudes
#     resources :pids
#     resources :plugins
#   end
# end
