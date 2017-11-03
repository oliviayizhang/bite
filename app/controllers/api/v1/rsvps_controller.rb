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
    body = JSON.parse(request.body.read)
    rsvp = Rsvp.new(body)
    if rsvp.save
      render json: { rsvp: rsvp}
    end
  end

  def destroy
    rsvp = Rsvp.find(params[:id])
    rsvp.destroy

    render json: "Hello"
  end
end
