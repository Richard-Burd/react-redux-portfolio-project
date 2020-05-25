class PidsController < ApplicationController
  def index
    pids = Pid.all
    render json: pids
  end

  def show
    pid = Pid.find_by(airframe_id: params[:id])
    render json: pid
  end
end
