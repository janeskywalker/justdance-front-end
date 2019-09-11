
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteMessage } from '../../actions/messageActions'



class Message extends Component {
    state = {

    }

    render() {
        const message = this.props.message
        const currentStudio = this.props.currentStudio
        return (
            <li
            className='message-list-item'
            key={message._id}
        >{message.content}<button onClick={(evt)=>{
            this.props.deleteMessage({
                studioId: currentStudio._id,
                messageId: message._id
            })
        }}>x</button>
        </li>
        )
    }

}






function mapStateToProps(state) {
  console.log('state: ', state)
  return { studios: state.studios, areStudiosLoaded: state.areStudiosLoaded }
}

export default connect(mapStateToProps, { deleteMessage } )(Message);







/**

1. have state for isUpdating (true | false)
2. have state for value (message content)
3. Have a button for 'update' (should only show if currentUser === message.User)
4. When 'update' clicked set isUpdating to true
5. If isUpdating === true render a form inside of li else render content in a <p>





if (isUpdating) {
    return (
        form
    )
} else {
    return (
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
    )
}

*/