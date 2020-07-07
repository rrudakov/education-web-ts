import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChatHistory } from './components/ChatHistory';
import { ChatInterface } from './components/ChatInterface';
import { thunkGetArticles } from './thunks';

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const thunk = useCallback(() => dispatch(thunkGetArticles()), [dispatch]);

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
