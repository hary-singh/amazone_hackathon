class ProductsController < ApplicationController
  before_action :set_department
  before_action :set_product, except: [ :index, :new, :create]

  def index
    @products = @department.products 
    render component: "Products", props: { department: @department , products: @products }
  end

  def show
    render component: "Product", props: { department: @department , product: @product }
  end

  def new
    @product = @department.product.new
    render component: "ProductNew", props: { department: @department , product: @product }
  end

  def edit
    render component: "ProductEdit", props: { department: @department , product: @product }
  end

  def create
    @product = @department.products.new(product_params)
    if @product.save
      redirect_to @product
    else
      render component: "ProductNew", props: { department: @department , product: @product }
    end
  end

  def update
    if @product.update(product_params)
      redirect_to @product
    else
      render component: "ProductEdit", props: { department: @department , product: @product } 
    end
  end

  def destroy
    @product.destroy
    redirect_to departments_products_path(@department)
  end

  private
    def set_product
      @product = @department.products.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name)
    end
    
    def set_department
      @department = current_user.departments.find(params[:department_id])
    end
end
