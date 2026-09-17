


function formatTime(isoString) {

  const dateObj = new Date(isoString);

  return dateObj.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function MessageBubble(props) {

    return(<li>
              {props.isMine ? "Me": "Them"}: {props.message.text} {formatTime(props.message.timestamp)}
    </li>)
}

export default MessageBubble;