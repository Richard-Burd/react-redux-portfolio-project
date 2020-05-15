class AirframesController < ApplicationController
  def index
    airframes = Airframe.all
    render json: airframes
  end

  def show
    airframe = Airframe.find_by(id: params[:id])
    render json: airframe
  end
end
