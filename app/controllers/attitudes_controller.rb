class AttitudesController < ApplicationController
  def index
    attitudes = Attitude.all
    render json: attitudes
  end

  def show
    attitude = Attitude.find_by(airframe_id: params[:id])
    render json: attitude
  end

  # params are created & deleted with their associated airframe so there are no
  # 'create' or 'destroy' actions in this controller...just an 'update'
  def update
    attitude = Attitude.find_by(airframe_id: params[:id])
    attitudeData = {
      lim_roll_cd: params[:java_script_lim_roll_cd],
      lim_pitch_max: params[:java_script_lim_pitch_max],
      lim_pitch_min: params[:java_script_lim_pitch_min]
    }
      attitude.update(attitudeData)
  end

end
