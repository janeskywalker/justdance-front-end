import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createMessage, deleteMessage } from '../../actions/messageActions'
import MessageForm from './MessageForm';



class StudioDetail extends Component {

    state = {
        newMessage: "",
        showForm: false,
    }

    handleChange = (evt) => {
        this.setState({ newMessage: evt.target.value })
        console.log(this.state)
    }

  render() {
        console.log('props: ', this.props)

        // grab the id from match
        // parseInt neeeds to be removed when going to mongo Id's
    
        const studios = this.props.studios
        const studioId = parseInt(this.props.match.params.id)
        const currentStudio = studios.filter(studio=> studio._id === studioId)[0]
        const { name, image, address: {street, city, zip} } = currentStudio

        console.log('current: ', currentStudio)
        console.log('messages: ', currentStudio.messages)

      return (
        <div className="studio-detail" >

        <section className="studio-info">
            <h2>{name} </h2>
            <img className="studio-image-detail" src={`/${image}`} alt="studio gallery" />
            <p>{street}</p>
            <p>{city}</p>
            <p>{zip}</p>
        </section>


        <section className="message-display">

            {this.props.currentUser !== null ? 

            this.state.showForm && this.props.currentUser !== null?
                <MessageForm
                    onSubmit={(evt)=>{
                        evt.preventDefault()
                        const newMessage = {
                            userId: this.props.currentUser._id,
                            studioId: studioId,
                            message: this.state.newMessage.trim(),
                        }
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


            <ul className='message-list'>
                {currentStudio.messages.map((message)=>{
                    return <li className='message-list-item'key={message._id}>{message.message}<button onClick={(evt)=>{
                        console.log('delete')
                        this.props.deleteMessage({
                            studioId: studioId,
                            messageId: message._id
                        })
                    }}>x</button></li>
                })}
            </ul>

        </section>

        </div>
      )
  }
    
}



function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
 
  
// connect takes your action creator (createMessage) and makes a new function
// That takes the action object returned from your function and gives it to your
// store's dispatch method (store.dispatch), which will call reducer
export default connect(mapStateToProps, { createMessage, deleteMessage })(StudioDetail);
  
  
// Redux
// 1. Create a store
// 2. Create a reducer
// 3. Create a set of actions
// 4. Call dispatch with an action
// 5. Dispatch will call your reducer with action
// 6. When new object is returned from reducer redux will rerender
