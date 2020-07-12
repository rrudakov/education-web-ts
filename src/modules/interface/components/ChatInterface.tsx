import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChatMessage } from '../selector';
import { sendChatMessage, updateChatMessage } from '../actions';
import { thunkGetArticles } from '../thunks';
import { Message } from '../reducer';

export const ChatInterface: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(getChatMessage);
  const userName = "Romka";
  const sendMessage = (message: Message) => dispatch(sendChatMessage(message));
  const updateMessage = (message: string) => dispatch(updateChatMessage(message));
  const fetchArticles = useCallback(() => dispatch(thunkGetArticles()), [dispatch]);

  const send = () => {
    sendMessage({
      user: userName,
      message: message,
      timestamp: new Date().getTime()
    });
  }

  const update = (e: React.SyntheticEvent<{ value: string }>) => {
    updateMessage(e.currentTarget.value);
  }

  const keyPress = (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      send();
    }
  }

  return (
    <div>
      <h3>User: {userName}</h3>
      <input
        value={message}
        onChange={update}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={fetchArticles}>Send</button>
    </div>
  );
}
