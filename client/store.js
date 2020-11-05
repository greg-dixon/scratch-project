import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
});

export default store;
