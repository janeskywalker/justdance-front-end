import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getStudio, getStudioMessages } from '../../actions/studioActions'
import { createMessage, deleteMessage } from '../../actions/messageActions'
import MessageForm from './MessageForm';
import Message from './Message'

class StudioDetail extends Component {

    // property, in the object, not prototype, methods are in the prototype
    // for cancellin the setTimeOut 
    timerId = null

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
        this.timeId = setTimeout(async () => {
            console.log('repeating')
            //  also takes the last time stamp 
            // compare and only grab the new messages from database
            const res = await this.props.getStudioMessages(this.props.match.params.id)
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

            // repeating to get messages
            this._scheduleTimeout();
        }
    }

    // componentDidUpdate() {
    //     // repeating to get messages
    //     console.log("this props:", this.props)
    //     setTimeout(function repeatGetMessages(){
    //         console.log('repeating')
    //         console.log("this props:", this.props)

    //         this.props.getStudioMessages(this.props.match.params.id)
    //         setTimeout(repeatGetMessages, 3000)
    //     }, 3000)
    // }

    render() {
        console.log('props: ', this.props)
        const currentStudio = this.getCurrentStudio()
        console.log('render studio: ', currentStudio)

        if (currentStudio) {
            const { name, image, address: {street, city, zip} } = currentStudio

            console.log('current: ', currentStudio)
            console.log('messages: ', currentStudio.messages)

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

export default connect(mapStateToProps, { createMessage, deleteMessage, getStudio, getStudioMessages })(StudioDetail);
  
// Redux
// 1. Create a store
// 2. Create a reducer
// 3. Create a set of actions
// 4. Call dispatch with an action
// 5. Dispatch will call your reducer with action
// 6. When new object is returned from reducer redux will rerender
