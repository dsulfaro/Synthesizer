import {START_RECORDING, ADD_NOTES, STOP_RECORDING} from '../actions/tracks_actions';

const recording = (oldState = false, action) => {
  switch (action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return oldState;
  }
};


export default recording;
