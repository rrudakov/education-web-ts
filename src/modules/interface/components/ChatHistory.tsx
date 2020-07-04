import React from 'react';
import { useSelector } from 'react-redux';
import { getChatMessages } from '../selector';

export const ChatHistory: React.FC = () => {
  const messages = useSelector(getChatMessages);

  return (
    <div>
      {messages.map(message => (
        <div key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
