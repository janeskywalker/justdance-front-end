import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReview} from '../../actions/reviewActions'



class StudioDetail extends Component {

    state = {
        newReview: " "
    }

    handleChange = (evt) => {
        this.setState({ newReview: evt.target.value })
        console.log(this.state)
    }

  render() {
        console.log(this.props)

    // grab the id from match
    // parseInt neeeds to be removed when going to mongo Id's
   
        const studios = this.props.studios
        const studioId = parseInt(this.props.match.params.id)
        const currentStudio = studios.filter(studio=> studio.id === studioId)[0]
        const { name, image, address: {street, city, zip} } = currentStudio

        console.log('current: ', currentStudio)
        console.log('reviews: ', currentStudio.reviews)

      return (
        <div className="studio-detail" >

        <section>
            <h2>{name} </h2>
            <img className="studio-image-detail" src={`/${image}`} alt="studio gallery" />
            <p>{street}</p>
            <p>{city}</p>
            <p>{zip}</p>
        </section>

        <button>Add Review</button>

        <form className="create-reivew-form" onSubmit={(evt)=>{
            evt.preventDefault()
            const newReview = {
                userId: this.props.currentUser.id,
                studioId: studioId,
                review: this.state.newReview.trim(),
            }
            this.props.createReview(newReview)}}  >

            <h3 className="text-center">New Review</h3>

            <div className="input-group">
                <label htmlFor="content"></label>
                <textarea className="form-content" name="content" id="content" type="content" placeholder="Please write your review here..." onInput={this.handleChange}></textarea>
            </div>

            <div className="form-footer">
                <button className="form-btn" type="submit">Submit</button>
                <button className="form-btn" type="button" onClick={console.log('cancel')}>Cancel</button>
            </div>

        </form>
        </div>
      )
  }
    
}



function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
 
  
// connect takes your action creator (createReview) and makes a new function
// That takes the action object returned from your function and gives it to your
// store's dispatch method (store.dispatch).
export default connect(mapStateToProps, { createReview })(StudioDetail);
  
  
// Redux
// 1. Create a store
// 2. Create a reducer
// 3. Create a set of actions
// 4. Call dispatch with an action
// 5. Dispatch will call your reducer with action
// 6. When new object is returned from reducer redux will rerender
//    your react views