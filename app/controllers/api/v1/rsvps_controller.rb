class Api::V1::RsvpsController < ApplicationController

  def index
    rsvps = current_user.rsvps
    render json: {rsvps: rsvps}
  end

  def show
    rsvp = Rsvp.find(params[:id])
    render json: {rsvp: rsvp}
  end

  def create
    # binding.pry
    # body = JSON.parse(request.body.read)
    # rsvp = Rsvp.new(body)
    user_id = params[:user_id]
    event_id = params[:event_id]

    rsvp = Rsvp.new(user_id: user_id, event_id: event_id)
    if rsvp.save
      render json: { rsvps: current_user.rsvps }
    else
      render json: { rsvps: 'noooo'}
    end


  end

  def destroy
    rsvp = Rsvp.find(params[:id])
    if rsvp.destroy
      render json: { rsvps: current_user.rsvps }
    end
  end
end
