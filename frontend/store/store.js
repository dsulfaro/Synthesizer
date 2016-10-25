import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';


const preLoadedState = {
  notes: [],
  recording: false,
  tracks: {}
};

const configureStore = (preState = preLoadedState) => (
  createStore(rootReducer, preState)
);

export default configureStore;
