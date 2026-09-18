

function MessageInput({messageText, onChange, onSend}) {

    return(<><input value={messageText} onChange={onChange} type="text"></input>
    <button onClick={onSend}>Send Message</button></>)
}

export default MessageInput;