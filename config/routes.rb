Rails.application.routes.draw do

    scope :admin, module: :admin, as: :admin do
    end

    scope "/", module: :web, as: :web do
        controller :pages do
            get "/", action: :home, as: :home
          end
          root "pages#home"
    end
end