import React, { Component } from 'react';
import { connect } from 'react-redux'



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
        console.log(image)
    
      return (
        <div className="studio-detail" >

        <section>
            <h2>You are at {name} </h2>
            <img className="studio-image-detail" src={`/${image}`} alt="studio gallery" />
            <p>{street}</p>
            <p>{city}</p>
            <p>{zip}</p>
        </section>

        </div>
      )
  }
    
}



function mapStateToProps(state) {
    return { studios: state.studios }
  }
  
export default connect(mapStateToProps)(StudioDetail);
  
  
