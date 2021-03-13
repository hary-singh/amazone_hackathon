class DepartmentsController < ApplicationController
  def index
    @departments = Department.all 
    render component: 'Departments', props: { departments: @departments }
  end

  def show
    @department = Department.find(params[:id])
    render component: 'Department,' props: { department: @department }
  end

  def new
    @department = Department.new
    render component: 'DepartmentNew', props: { department: @department }
  end

  def create
    @department = Department.new(department_params)
    if @department.save
      redirect_to departments_path
    else
      render component: 'DepartmentNew', props: { department: @department }
    end
  end

  def edit
    @department = Department.find(params[:id])
    render component: 'DepartmentEdit', props: { department: @department }
  end

  def update
    @department = Department.find(params[:id])
    if @department.update(department_params)
      redirect_to departments_path
    else
      render component: 'DepartmentEdit', props: { department: @department }
  end
end

  def destroy
    @department = Department.find(params[:id])
    @department.destroy
    redirect_to departments_path
  end

  private
  def department_params
    params.require(:department).permit(:title)
  end
end
