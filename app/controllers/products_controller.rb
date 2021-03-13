class ProductsController < ApplicationController
  before_Action :set_product, except: [ :index, :new, :create]
  def index
    @products = Product.all 
    render component: "Products", props: { products: @products }
  end

  def show
    render component: "Product", props: { product: @product }
  end

  def new
    @product = Product.new
    render component: "ProductNew", props: { product: @product }
  end

  def edit
    render component: "ProductEdit", props: { product: @product }
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to @product
    else
      render component: "ProductNew", props: { product: @product }
  end

  def update
    if @product.update(product_params)
      redirect_to @product
    else
      render component: "ProductEdit", props: { product: @product } 
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name)
    end

end
