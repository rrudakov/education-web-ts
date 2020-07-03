import * as React from 'react';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (userName: string, message: string) => void;
  updateMessage: (event: React.SyntheticEvent<{ value: string }>) => void;
}

const ChatInterface: React.SFC<ChatInterfaceProps> = ({
  userName,
  message,
  updateMessage,
  sendMessage,
}) => {
  function send() {
    sendMessage(userName, message);
  }

  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key == 'Enter') {
      send();
    }
  }

  return (
    <div className="chat-interface">
      <h3>User: {userName}</h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default ChatInterface;
