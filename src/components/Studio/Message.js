/**

1. have state for isUpdating (true | false)
2. have state for value (message content)
3. Have a button for 'update' (should only show if currentUser === message.User)
4. When 'update' clicked set isUpdating to true
5. If isUpdating === true render a form inside of li else render content in a <p>

<li
    className='message-list-item'
    key={message._id}
>
    <p>{message.content}</p>
    
    { this.props.currentUser && this.props.currentUser._id === message.User ?
        <div class="action-container">
            <button onClick={(evt)=>{
                this.props.deleteMessage({
                    studioId: currentStudio._id,
                    messageId: message._id
                })
            }}>x</button>
            // update button...
        </div>
    : undefined }
</li>

*/