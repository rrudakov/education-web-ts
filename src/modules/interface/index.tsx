import React, { useEffect } from 'react';
import { ChatHistory } from './components/ChatHistory';
import { ChatInterface } from './components/ChatInterface';
import { thunkGetArticles } from './thunks';
import { useAction } from '../../core/hooks/useAction';

export const Chat: React.FC = () => {
  const thunk = useAction(thunkGetArticles);

  useEffect(() => {
    thunk();
  });

  return (
    <div>
      <ChatHistory />
      <ChatInterface />
    </div>
  );
}
