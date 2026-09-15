import { useState } from "react";
import { currentUser, users, conversations } from "./data/mockData";

function App() {

  const[activeConversationId, setActiveConversationId] = useState(null);

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

    <p>Active conversation: {activeConversationId ?? "none selected"}</p>
  </div>
  );
}




export default App