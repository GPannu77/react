import { useState } from "react";
import { currentUser, users, conversations as initialConversations } from "./data/mockData";


function formatTime(isoString) {

  const dateObj = new Date(isoString);

  return dateObj.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function App() {

  const[activeConversationId, setActiveConversationId] = useState(null);
  const[conversations, setConversations] = useState(initialConversations);
  const[messageText, setMessageText] = useState("");

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  function changeMessageText(e){
    setMessageText(e.target.value);
  }

  function sendMessage(){
    if (messageText.trim() === "" || activeConversation === undefined) {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      text: messageText,
      timestamp: new Date().toISOString()
    }

    setConversations(conversations.map((c) => c.id === activeConversationId ? (
        {...c, messages: [...c.messages, newMessage]}) : (c)));

    setMessageText("");

    setTimeout(() => {
      const replyMessage = {
        id: Date.now().toString(),
        senderId: activeConversation.participantId,
        text: "Thanks for your message!",
        timestamp: new Date().toISOString()
      }

      setConversations((prevConversations => {
        return prevConversations.map((i) => i.id === activeConversationId ? (
          {...i, messages: [...i.messages, replyMessage]}) : (i))}));

    }, 1500);

  }

  return(
  <div>
    <h1>Chats</h1>
    <ul>
      {conversations.map((c) => {
        const participant = users.find((u) => u.id === c.participantId);
        return (
        <li 
          key={c.id}
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
              {isMine ? "Me": "Them"}: {message.text} {formatTime(message.timestamp)}
            </li>
          )
        })}
      </ul>
    )}
    <input value={messageText} onChange={(e) => changeMessageText(e)} type="text"></input>
    <button onClick={sendMessage}>Send Message</button>
  </div>
  );
}




export default App