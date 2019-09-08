import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReview, deleteReview } from '../../actions/reviewActions'
import ReviewForm from './ReviewForm';



class StudioDetail extends Component {

    state = {
        newReview: "",
        showForm: false,
    }

    handleChange = (evt) => {
        this.setState({ newReview: evt.target.value })
        console.log(this.state)
    }

  render() {
        console.log('props: ', this.props)

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

        <section className="studio-info">
            <h2>{name} </h2>
            <img className="studio-image-detail" src={`/${image}`} alt="studio gallery" />
            <p>{street}</p>
            <p>{city}</p>
            <p>{zip}</p>
        </section>

        <section className="review-display">

            {this.state.showForm ?
                <ReviewForm
                    onSubmit={(evt)=>{
                        evt.preventDefault()
                        const newReview = {
                            userId: this.props.currentUser.id,
                            studioId: studioId,
                            review: this.state.newReview.trim(),
                        }
                        this.props.createReview(newReview)
                        this.setState({ newReview: '' })
                    }}
                    onCancel={() => {
                        this.setState({
                            newReview: '',
                            showForm: false
                        })
                    }}
                    onChange={this.handleChange}
                    value={this.state.newReview}
                />
            : <button onClick={() => {
                if (this.state.showForm) {
                    this.setState({ showForm: false })
                } else {
                    this.setState({ showForm: true })
                }
            }}>Add Review</button>}

            <ul>
                {currentStudio.reviews.map((review)=>{
                    return <li key={review.id}>{review.review}<button onClick={(evt)=>{
                        console.log('delete')
                        this.props.deleteReview({
                            studioId: studioId,
                            reviewId: review.id
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
 
  
// connect takes your action creator (createReview) and makes a new function
// That takes the action object returned from your function and gives it to your
// store's dispatch method (store.dispatch), which will call reducer
export default connect(mapStateToProps, { createReview, deleteReview })(StudioDetail);
  
  
// Redux
// 1. Create a store
// 2. Create a reducer
// 3. Create a set of actions
// 4. Call dispatch with an action
// 5. Dispatch will call your reducer with action
// 6. When new object is returned from reducer redux will rerender
