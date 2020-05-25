class AirframesController < ApplicationController
  def index
    # airframes = Airframe.all

    # to make this as efficient as possible, we only need to grab the name and id
    # since we are not displaing airframe details all at once, since we have
    # each airframe on a seperate route in the current configuration.
    airframes = Airframe.select(:name, :id)
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
    new_airframe = Airframe.create(airframeData)
    new_attitude = Attitude.create(airframe_id: new_airframe.id)
    new_pid = Pid.create(airframe_id: new_airframe.id)
    new_plugin = Plugin.create(airframe_id: new_airframe.id)
  end

  # If the value is not included in airframeData, the value gets updated to null
  # regardless of any existing value in the database.  This update method assumes
  # any current values present in the database are being rendered into the views,
  # and resubmitted as 'value' inputs from a <form> in the browser.
  def update
    airframe = Airframe.find_by(id: params[:id])
    airframeData = {
      name: params[:java_script_name],
      weight: params[:java_script_weight],
      config: params[:java_script_config],
      image: params[:java_script_image]
    }
      airframe.update(airframeData)
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
