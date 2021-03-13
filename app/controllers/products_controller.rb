class ProductsController < ApplicationController
  before_Action :set_product, except: [ :index, :new, :create]
  def index
    @products = Product.all 
    render component: "Products", props: { products: @products }
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

end
