class Api::V1::EventsController < ApplicationController

  def index
    render json: Event.for_groups_of(current_user)
  end

  def show
    event = Event.find(params[:id])
    users = event.users
    render json: {event: event, users: users}
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
