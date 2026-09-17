import MessageBubble from "./MessageBubble";
import { currentUser } from "../data/mockData";

function MessageList({activeConversation}) {

    return(<><h3>Messages</h3>
    {activeConversation === undefined ? (
      <p>Select a chat</p>
    ) : (
      <ul>
        {activeConversation.messages.map((message) => {
          const isMine = message.senderId === currentUser.id;
          return (
            <MessageBubble key={message.id} message={message} isMine={isMine}></MessageBubble>
          );
        })}
      </ul>
    )}</>
    );
}

export default MessageList;