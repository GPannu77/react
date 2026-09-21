import { useState, useEffect, useRef } from "react";
import { currentUser, users, conversations as initialConversations } from "./data/mockData";
import ConversationList from "./components/ConversationList";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";

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
  const[isTyping, setIsTyping] = useState(false);
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
    setIsTyping(true);

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
      
        setIsTyping(false);
    }, 1500);

  }

  return(<>
    <Login></Login>
  <div className={isDarkMode ? "dark" : "light"}>
    <h1>Chats</h1>
    <button onClick={()=> setIsDarkMode((prev) => !prev)}>Toggle Dark Mode</button>
    
    <ConversationList conversations={conversations} onSelectConversation={setActiveConversationId}></ConversationList>

    <ChatWindow 
      activeConversation={activeConversation}
      isTyping={isTyping}
      messageText={messageText}
      onChange={changeMessageText}
      onSend={sendMessage}></ChatWindow>
    <div ref={messageEndRef}></div>
  </div></>
  );
}

export default App