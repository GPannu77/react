import { users } from "../data/mockData";

function ChatHeader({activeConversation}) {
    if (activeConversation === undefined) {
        return null;
    }

    const participant = users.find((u) => u.id === activeConversation.participantId);

    return(<><h2>{participant.name}</h2></>)
}

export default ChatHeader;