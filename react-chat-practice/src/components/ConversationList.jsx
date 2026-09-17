import ConversationItem from "./ConversationItem";
import { users } from "../data/mockData";

function ConversationList({conversations, onSelectConversation}) {

    return(<><ul>
      {conversations.map((c) => {
        const participant = users.find((u) => u.id === c.participantId);
        return (

          <ConversationItem 
            key={c.id}
            participantName={participant.name}
            onClick={() => onSelectConversation(c.id)}
            >
            </ConversationItem>);
      })}
    </ul></>);
} 

export default ConversationList;