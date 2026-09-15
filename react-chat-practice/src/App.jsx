import { useState } from "react";
import { currentUser, users, conversations } from "./data/mockData";

function App() {

  const[activeConversationId, setActiveConversationId] = useState(null);

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  return(
  <div>
    <h1>Chats</h1>
    <ul>
      {conversations.map((c) => {
        const participant = users.find((u) => u.id === c.participantId);
        return (
        <li 
          key={c.participantId}
          onClick={() => setActiveConversationId(c.id)}
            >
              {participant.name}
          </li>);
      })}
    </ul>

    <h3>Messages</h3>
    {activeConversation === undefined ? (
      <p>Select a chat</p>
    ) : (
      <ul>
        {activeConversation.messages.map((message) => {
          const isMine = message.senderId === currentUser.id;
          return (
            <li key={message.id}>
              {isMine ? "Me": "Them"}: {message.text}
            </li>
          )
        })}
      </ul>
    )}
  </div>
  );
}




export default App