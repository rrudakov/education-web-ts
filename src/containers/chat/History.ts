import { AppState } from "../../store";
import { connect } from "react-redux";
import ChatHistory from "../../component/chat/History";

export function mapStateToProps(state: AppState) {
    return {
        messages: state.chat.messages,
    }
}

export default connect(mapStateToProps)(ChatHistory);
