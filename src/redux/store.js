import { createStore } from 'redux';
import PlayerReducer from './reducers/player';

export default createStore(
  PlayerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);