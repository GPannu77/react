import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";
import MessageList from "./MessageList";

function ChatWindow({activeConversation, isTyping, messageText, onChange, onSend}) {

    return(<>
    <ChatHeader activeConversation={activeConversation}></ChatHeader>
    <MessageList activeConversation= {activeConversation}></MessageList>
    {isTyping ? <TypingIndicator></TypingIndicator>: null}
    <MessageInput messageText={messageText} onChange={onChange} onSend={onSend}></MessageInput></>);
}

export default ChatWindow;