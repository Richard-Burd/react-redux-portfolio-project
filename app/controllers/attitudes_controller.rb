class AttitudesController < ApplicationController
  def index
    attitudes = Attitude.all
    render json: attitudes
  end

  def show
    attitude = Attitude.find_by(id: params[:id])
    render json: attitude
  end
end
