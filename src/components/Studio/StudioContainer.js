import React, { Component } from 'react';
import { connect } from 'react-redux'
import Studio from './Studio'
import { getStudios } from '../../actions/studioActions'


  // refactor this to be a class comp
  // action to fetch all studios from server in component did mount


  class StudioContainer extends Component {
    componentDidMount() {
      if (this.props.areStudiosLoaded === false) {
        this.props.getStudios()
      }
    }

    render () {
      console.log('render: ', this.props.studios)

      const showStudios = Object.keys(this.props.studios).map(studioId=> {
        const studio = this.props.studios[studioId]
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
  return { studios: state.studios, areStudiosLoaded: state.areStudiosLoaded }
}

export default connect(mapStateToProps, { getStudios })(StudioContainer);





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


