import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Home'
import ProfileContainer from '../components/Profile/ProfileContainer';
import StudioContainer from '../components/Studio/StudioContainer';

// destructuring 
const Router = () => {

  return (
      <Switch>
  
        {/* creating routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/studios" component={StudioContainer} />


      </Switch>
  )
}


export default withRouter(Router)