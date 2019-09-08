import { createStore } from 'redux';
import reducer from './reducers';


const configureStore = () => {
  const store = createStore(
    // create store, pass to reducer
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
