import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReview} from '../../actions/reviewActions'



class StudioDetail extends Component {

    state = {
        showForm: false
    }


  render() {
        console.log(this.props)

    // grab the id from match
    // parseInt neeeds to be removed when going to mongo Id's
   
        const studios = this.props.studios
        const studioId = parseInt(this.props.match.params.id)
        const currentStudio = studios.filter(studio=> studio.id === studioId)
        const { name, image, address: {street, city, zip} } = currentStudio[0]

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

        <form className="form" onSubmit={(evt)=>{
            evt.preventDefault()
            console.log('creaing review')}}  >

            <h3 className="text-center">New Review</h3>

            <div className="input-group">
                <label htmlFor="content"></label>
                <textarea className="form-content" name="content" id="content" type="content" placeholder="Please write your review here..."></textarea>
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
  
export default connect(mapStateToProps, { createReview })(StudioDetail);
  
  
