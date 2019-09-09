import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Home'
import ProfileContainer from '../components/Profile/ProfileContainer';
import StudioContainer from '../components/Studio/StudioContainer';
import StudioDetail from '../components/Studio/StudioDetail';
import LoginForm from '../components/User/LoginForm';

// destructuring 
const Router = () => {

  return (
      <Switch>
  
        {/* creating routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/studios" component={StudioContainer} />
        <Route exact path="/studio/:id" component={StudioDetail} />
        <Route exact path="/loginform" component={LoginForm} />

      </Switch>
  )
}


export default withRouter(Router)