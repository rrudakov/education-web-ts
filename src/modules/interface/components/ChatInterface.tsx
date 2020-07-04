import React from 'react';
import { useSelector } from 'react-redux';
import { getChatMessage } from '../selector';
import { sendChatMessage, updateChatMessage } from '../actions';
import { useAction } from '../../../core/hooks/useAction';
import { thunkGetArticles } from '../thunks';
import { getUserName } from '../../../core/selector';

export const ChatInterface: React.FC = () => {
  const message = useSelector(getChatMessage);
  const userName = useSelector(getUserName);
  const sendMessage = useAction(sendChatMessage);
  const updateMessage = useAction(updateChatMessage);
  const fetchArticles = useAction(thunkGetArticles);

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

  const keyPress = (e: React.KeyboardEvent<any>) => {
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
