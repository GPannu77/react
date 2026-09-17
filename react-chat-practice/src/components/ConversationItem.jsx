

function ConversationItem (props) {
    
    return(<li 
        onClick={props.onClick}>
            {props.participantName}
    </li>);
}

export default ConversationItem;