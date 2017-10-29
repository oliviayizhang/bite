class Api::V1::GroupsController < ApplicationController

  def index
   user = current_user
   render json: { groups: user.groups }
  end
end
