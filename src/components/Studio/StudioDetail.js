import React from 'react';
import { connect } from 'react-redux'




const StudioDetail = ({studios, match}) => {
    // grab the id from match
    // parseInt neeeds to be removed when going to mongo Id's
   const studioId = parseInt(match.params.id)

   console.log('studios: ', studios)
   console.log('studioId: ', studioId)

   const currentStudio = studios.filter(studio=> studio.id === studioId)
  
   console.log('current: ', currentStudio)

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
{/* 
        <section>
            <button onClick={toggleForm}/>
        </section> */}

    </div>
  );
}



function mapStateToProps(state) {
    return { studios: state.studios }
  }
  
export default connect(mapStateToProps)(StudioDetail);
  
  
