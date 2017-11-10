class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "chat_#{params[:chat_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    # ActionCable.server.broadcast "chat_channel", message: data[:message], handle: "Mr. Random", icon_num: 1, key: "#{Time.now.to_datetime.strftime('%Q')}-#{current_user.id}"
    # unless data[message].length == 0
    #
    # end
    data["chat_key"] = "#{Time.now.to_datetime.strftime('%Q')}-#{current_user.id}"

    ActionCable.server.broadcast("chat_#{params[:chat_id]}", data)
    puts data
  end
end
