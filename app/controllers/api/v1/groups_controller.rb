class Api::V1::GroupsController < ApplicationController

  def index
   render json: { groups: current_user.groups }
  end

  def show
    group = Group.find(params[:id])
    events = group.events

    render json: {group: group, events: events}
  end
end
