class AttitudesController < ApplicationController
  def index
    attitudes = Attitude.all
    render json: attitudes
  end

  def show
    attitude = Attitude.find_by(id: params[:id])
    render json: attitude
  end

  # params are created & deleted with their associated airframe so there are no
  # 'create' or 'destroy' actions in this controller...just an 'update'
  def update

  end

end
