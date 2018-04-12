class StaticPagesController < ApplicationController

  def index
    if current_user.nil?
      redirect_to new_user_session_path
    end
  end
end
