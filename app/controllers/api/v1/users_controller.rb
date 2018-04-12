class Api::V1::UsersController < ApplicationController

  def index
    # if current_user
    #   render json: {user: current_user}
    # end
    render json: {user: User.find(31)}
  end
end
