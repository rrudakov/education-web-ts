import { Dispatch } from "redux";
import { ChatActionTypes } from "../../store/chat/types";
import { sendMessage, updateMessage } from "../../store/chat/actions";
import { connect } from "react-redux";
import { AppState } from "../../store";
import ChatInterface from "../../component/chat/Interface";

const mapStateToProps = (state: AppState) => ({
    userName: state.system.userName,
    message: state.chat.message,
})

export function mapDispatchToProps(dispatch: Dispatch<ChatActionTypes>) {
    return {
        sendMessage: (userName: string, message: string) => dispatch(sendMessage({
            user: userName,
            message: message,
            timestamp: new Date().getTime()
        })),
        updateMessage: (event: React.SyntheticEvent<{ value: string }>) => dispatch(updateMessage(event.currentTarget.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface);
