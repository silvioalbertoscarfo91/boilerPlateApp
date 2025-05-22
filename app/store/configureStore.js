import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';

const rootReducer = combineReducers(
  {countReducer}
);
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
