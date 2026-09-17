import { useState, useEffect, useRef } from "react";
import { currentUser, users, conversations as initialConversations } from "./data/mockData";
import MessageBubble from "./components/MessageBubble";
import ConversationItem from "./components/ConversationItem";
import MessageList from "./components/MessageList";

function App() {

  const[activeConversationId, setActiveConversationId] = useState(null);
  const[conversations, setConversations] = useState(() => {
    const savedConversation = localStorage.getItem("chatConversations");
    
    if (savedConversation === null) {
      return initialConversations;
    }

    return (JSON.parse(savedConversation));
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const[messageText, setMessageText] = useState("");

  const messageEndRef = useRef(null);

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({behavior: "smooth"});
  }, [activeConversation?.messages]);

  useEffect(() => {
    localStorage.setItem("chatConversations", JSON.stringify(conversations));
  }, [conversations]);


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
  <div className={isDarkMode ? "dark" : "light"}>
    <h1>Chats</h1>
    <button onClick={()=> setIsDarkMode((prev) => !prev)}>Toggle Dark Mode</button>
    <ul>
      {conversations.map((c) => {
        const participant = users.find((u) => u.id === c.participantId);
        return (

          <ConversationItem 
            key={c.id}
            participantName={participant.name}
            onClick={() => setActiveConversationId(c.id)}
            >
            </ConversationItem>);
      })}
    </ul>

    <MessageList activeConversation= {activeConversation}></MessageList>
    <div ref={messageEndRef}></div>
    <input value={messageText} onChange={(e) => changeMessageText(e)} type="text"></input>
    <button onClick={sendMessage}>Send Message</button>
  </div>
  );
}




export default App