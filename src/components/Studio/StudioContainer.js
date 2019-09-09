import React, { Component } from 'react';
import { connect } from 'react-redux'
import Studio from './Studio'
import { getStudios } from '../../actions/studioActions'


  // refactor this to be a class comp
  // action to fetch all studios from server in component did mount


  class StudioContainer extends Component {
    state = {
      studios: this.props.studios
    }

    componentDidMount() {
      getStudios()
    }

    render () {
      console.log(this.state.studios)


    const showStudios = this.state.studios.map(studio=> {
      return <Studio studio={studio} key={studio._id}/>
    })

      return (
        <section className="studio-container">
              <h2>StudioContainer</h2>
              <ul className="studio-wrapper">
                { showStudios }
              </ul>
        </section>

      )
    }
  }


function mapStateToProps(state) {
  console.log('state: ', state)
  return { studios: state.studios }
}

export default connect(mapStateToProps, getStudios)(StudioContainer);





// const StudioContainer = ({ studios }) => {
//   console.log(studios)

//   const showStudios = studios.map(studio=> {
//     return <Studio studio={studio} key={studio._id}/>
//   })

 
  
//   return (
//     <section className="studio-container">
//       <h2>StudioContainer</h2>
//       <ul className="studio-wrapper">
//         { showStudios }
//       </ul>
//     </section>
//   )
// }


