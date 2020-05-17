class AirframesController < ApplicationController
  def index
    airframes = Airframe.all
    render json: airframes
  end

  def show
    airframe = Airframe.find_by(id: params[:id])
    render json: airframe
  end

  def create
    airframeData = {
      name: params[:java_script_name],
      weight: params[:java_script_weight],
      config: params[:java_script_config],
      image: params[:java_script_image]
    }
      Airframe.create(airframeData)
  end

  def destroy
    airframe = Airframe.find_by(:id => params[:id])

    # Whenever the airframe gets deleted, its associated classes also get deleted.
    # In the future, parameters may be shared between airframes but not for now.
    airframeAttitude = Attitude.find_by(:airframe_id => params[:id])
    airframePid = Pid.find_by(:airframe_id => params[:id])
    airframePlugin = Plugin.find_by(:airframe_id => params[:id])
    if airframe.present?
      Airframe.destroy(airframe.id)

      # Whenever the airframe gets deleted, its associated classes also get deleted.
      # In the future, parameters may be shared between airframes but not for now.
      Attitude.destroy(airframeAttitude.id)
      Pid.destroy(airframePid.id)
      Plugin.destroy(airframePlugin.id)
      head :no_content
    end
  end
end
