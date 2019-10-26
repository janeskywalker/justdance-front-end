import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getStudio, getStudioMessages, getNewMessages } from '../../actions/studioActions'
import { createMessage, deleteMessage } from '../../actions/messageActions'
import MessageForm from './MessageForm';
import Message from './Message'

class StudioDetail extends Component {

    // property, in the object, not prototype, methods are in the prototype
    // for cancelling the setTimeOut 
    timerId = null

    // timeStamp property save the created time of the newest message <- from the new message back from api 
    newMessageTimeStamp = 0

    state = {
        newMessage: "",
        showForm: false,
    }

    handleChange = (evt) => {
        this.setState({ newMessage: evt.target.value })
        console.log(this.state)
    }

    getCurrentStudio() {
        const studios = this.props.studios
        const studioId = this.props.match.params.id
        const currentStudio = studios[studioId]
        console.log('current: ', currentStudio)
        return currentStudio
    }

    // private method 
    // continuation 
    _scheduleTimeout() {
        console.log('start timer');
        this.timeId = setTimeout(async () => {
            console.log('repeating')
            //  also takes the last time stamp 
            // compare and only grab the new messages from database
            const res = await this.props.getNewMessages(this.props.match.params.id, this.newMessageTimeStamp)
            console.log('newMessages: ', res)
            this._scheduleTimeout()
        }, 3000)
    }

    async componentDidMount() {
        const currentStudio = this.getCurrentStudio()
        if (!currentStudio) {
            // grab the id from match
            this.props.getStudio(this.props.match.params.id)
        } else if (!currentStudio.messages) {
            console.log("this props:", this.props)
            await this.props.getStudioMessages(this.props.match.params.id)
            console.log("this props:", this.props)
        }

        // repeating to get messages
        this._scheduleTimeout();
    }

    componentWillUnmount() {
        if(this.timerId) {
            clearTimeout(this.timerId)
        }
    }

    render() {
        console.log('props: ', this.props)
        const currentStudio = this.getCurrentStudio()
        console.log('render studio: ', currentStudio)

        if (currentStudio) {
            const { name, image, address: {street, city, zip} } = currentStudio

            console.log('current: ', currentStudio)
            console.log('messages: ', currentStudio.messages)

            // extract create time for newest message
            // only use teneray opoerator when need to return somthing
            this.newMessageTimeStamp = currentStudio.messages && currentStudio.messages[0] ? 
                currentStudio.messages[0].create_date : 
                this.newMessageTimeStamp

            return (
                <div className="studio-detail" >
    
                    {/* display studio info */}
                    <section className="studio-info">
                        <h2 className="section-header">{name} </h2>
                        <img className="studio-image-detail" src={`/${image}`} alt="studio gallery" />
                        <p>{street}</p>
                        <p>{city}</p>
                        <p>{zip}</p>
                    </section>
            
                    <section className="message-display">
                        {/* displaying message form */}
                        {this.props.currentUser !== null ? 
                        this.state.showForm && this.props.currentUser !== null?
                            <MessageForm
                                onSubmit={(evt)=>{
                                    evt.preventDefault()
                                    // this is what message look like
                                    const newMessage = {
                                        userId: this.props.currentUser._id,
                                        studioId: currentStudio._id,
                                        content: this.state.newMessage.trim(),
                                    }
                                    // call create message action
                                    this.props.createMessage(newMessage)
                                    this.setState({ newMessage: '' })
                                }}
                                onCancel={() => {
                                    this.setState({
                                        newMessage: '',
                                        showForm: false
                                    })
                                }}
                                onChange={this.handleChange}
                                value={this.state.newMessage}
                            />
                        : <button onClick={() => {
                            if (this.state.showForm) {
                                this.setState({ showForm: false })
                            } else {
                                this.setState({ showForm: true })
                            }
                        }}>Add Message</button>
                        : undefined
                    }
            
                        {/* displaying messages */}
                        {currentStudio.messages? 
                        
                        <ul className='message-list'>
                            {currentStudio.messages.map((message)=>{
                                return (
                                    <Message key={message._id} message={message} currentStudio={currentStudio} />
                                )
                            })}
                        </ul>
                        : undefined
                        }

                    </section>
        
                </div>
            )
        } else {
            return (
                <div className="studio-detail">
                    <h2>Loading...</h2>
                </div>        
            )
        }
  }
}

function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
  
// connect takes your action creator (createMessage) and makes a new function
// That takes the action object returned from your function and gives it to your
// store's dispatch method (store.dispatch), which will call reducer

export default connect(mapStateToProps, { createMessage, deleteMessage, getStudio, getStudioMessages, getNewMessages })(StudioDetail);
  
// Redux
// 1. Create a store
// 2. Create a reducer
// 3. Create a set of actions
// 4. Call dispatch with an action
// 5. Dispatch will call your reducer with action
// 6. When new object is returned from reducer redux will rerender
