
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteMessage, updateMessage } from '../../actions/messageActions'
import MessageForm from './MessageForm'
import moment from 'moment'



class Message extends Component {
    state = {
        isUpdating: false,
        content: '',
    }

    handleChange = (evt) => {
        console.log('change: ', evt.target.value)
        this.setState({
            content: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.updateMessage(
            Object.assign({}, this.props.message, {
                content: this.state.content
            })
        )

        this.setState({
            isUpdating: false,
            content: '',
        })
    }

    handleCancel = (evt) => {
        this.setState({
            isUpdating: false,
            content: '',
        })
    }

    render() {
        const message = this.props.message
        const currentStudio = this.props.currentStudio

        if (this.state.isUpdating) {
            return (
                <li
                    className='message-list-item'
                    key={message._id}
                >
                    <MessageForm
                        value={this.state.content || message.content}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        onCancel={this.handleCancel}
                    />
                </li>
            )
        } else {
            return (
                <li
                    className='message-list-item'
                    key={message._id}
                >
                    <p className='message-user-name'>{message.User.username} says:</p>
                    <div className="message-content-container">
                        <p className="message-content">{message.content}</p>
                        <p className="message-date">{moment(message.create_date).fromNow()}</p>
                        {this.props.currentUser && this.props.currentUser._id === message.User._id ?
                            <div className="button-container">
                                <button onClick={(evt)=>{
                                    this.props.deleteMessage({
                                    studioId: currentStudio._id,
                                    messageId: message._id
                                })
                                }}>Delete</button>
                                <button onClick={(evt)=>{
                                    this.setState({ isUpdating: true })
                                    // console.log('updating')
                                }}>Update</button>
                            </div>
                            : undefined
                        }
                    </div>
                </li>
            )
        }
    }
}






function mapStateToProps(state) {
  console.log('state: ', state)
  return { studios: state.studios, areStudiosLoaded: state.areStudiosLoaded, currentUser: state.currentUser }
}

export default connect(mapStateToProps, { deleteMessage, updateMessage } )(Message);







/**

1. have state for isUpdating (true | false)
2. have state for value (message content)
3. Have a button for 'update' (should only show if currentUser === message.User)
4. When 'update' clicked set isUpdating to true
5. If isUpdating === true render a form inside of li else render content in a <p>
6. on submit of the form, action -> reducer 




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