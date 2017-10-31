class Api::V1::EventsController < ApplicationController

  def index
    render json: current_user.events
  end

  def create
    body = JSON.parse(request.body.read)
    event = Event.new(body)
    rsvp = Rsvp.create(user: current_user, event: event)

    if event.save
      render json: { event: event }
    end
  end
end
