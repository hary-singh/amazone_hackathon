class StaticPagesController < ApplicationController
  def home
    render component: "Home"
  end
end
