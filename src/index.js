import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import { BrowserRouter as Router } from 'react-router-dom'
// import { createMessage } from './actions/messageActions';

// get store 
// pass it to provider 

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))

// You can call your store's dispatch method yourself!
// store.dispatch is what calls the reducer
// setTimeout(() => {
//   store.dispatch(createMessage({
//     userId: 1,
//     studioId: 6,
//     review: 'This is another good review',
//   }))
// }, 1000)

// fetch('http://localhost:4000/api/v1/studios').then((res) => {
//   store.dispatch(res.body())
// })