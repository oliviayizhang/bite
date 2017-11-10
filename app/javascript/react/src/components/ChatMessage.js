import React from 'react';
// import { railsAssetImagePath } from '../constants/railsAssetImagePath';


const ChatMessage = (props) => {
  return(
    <p>
      {/* <img src={railsAssetImagePath(`chat_image_${icon}`)} width="40"/> */}
      <strong> {props.name}: </strong>
      {props.message}
    </p>
  );
};

export default ChatMessage;
