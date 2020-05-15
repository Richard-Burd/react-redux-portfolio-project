class PluginsController < ApplicationController
  def index
    plugins = Plugin.all
    render json: plugins
  end

  def show
    plugin = Plugin.find_by(id: params[:id])
    render json: plugin
  end
end
