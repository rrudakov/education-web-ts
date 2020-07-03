
import React from 'react';
import { useSelector } from 'react-redux';
import { getChatMessage } from './selector';
import { useAction } from '../../core/hooks/useAction';
import { SendMessage, UpdateMessage } from './actions';
export const Interfaces: React.FC = () => {
    const message = useSelector(getChatMessage);

    const sendMessage = useAction(SendMessage);
    const updateMessage = useAction(UpdateMessage);

    function send() {
        sendMessage("hello");
    }

    function keyPress(e: React.KeyboardEvent<any>) {
        if (e.key === 'Enter') {
            send();
        }
    }

    return (
        <div className="chat-interface">
            <h3>User: hello</h3>
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