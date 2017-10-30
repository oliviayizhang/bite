class Api::V1::GroupsController < ApplicationController

  def index
   render json: { groups: current_user.groups }
  end

  def show
    group = Group.find(params[:id])
    events = group.events

    render json: {group: group, events: events}
  end

  def create
    body = JSON.parse(request.body.read)
    group = Group.new(body)
    membership = Membership.create(user: current_user, group: group)
    if group.save
      render json: { group: group}
    end
  end
end
