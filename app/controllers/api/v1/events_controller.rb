class Api::V1::EventsController < ApplicationController

  def index
    render json: {events: current_user.events}
  end
end
