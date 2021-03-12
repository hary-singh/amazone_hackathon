class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  before_action :render_navbar

  protected 
    def render_navbar
      render component: "Navbar"
    end
end
