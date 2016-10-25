import {START_RECORDING, ADD_NOTES, STOP_RECORDING} from '../actions/tracks_actions';
import { merge } from 'lodash';

const tracksReducer = (oldState = {}, action) => {
  let currTrackId = 0;
  Object.freeze(oldState);
  switch (action.type) {
    case START_RECORDING:
      currTrackId += 1;
      let track = {currTrackId: { id: currTrackId, name: `Track ${currTrackId}`, roll: {}, timeStart: Date.now() }};
      return merge({}, oldState, track);
    case STOP_RECORDING:
      let currentTrack = merge({}, oldState[currTrackId]);
      currentTrack.roll += {notes: [], timeSlice: action.timeNow - oldState[currTrackId].timeStart};
      return merge({}, oldState, currentTrack);
    case ADD_NOTES:
      let currentTrack2 = merge({}, oldState[currTrackId]);
      currentTrack2.roll += {notes: [action.notes], timeSlice: action.timeNow - oldState[currTrackId].timeStart};
      return merge({}, oldState, currentTrack2);
    default:
      return oldState;
  }
};

export default tracksReducer;
