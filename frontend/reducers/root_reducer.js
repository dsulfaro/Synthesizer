import {combineReducers} from 'redux';
import NotesReducer from './notes_reducer';
import tracksReducer from './tracks_reducer';
import recording from './is_recording_reducer';


const rootReducer = combineReducers({
  notes: NotesReducer,
  tracks: tracksReducer,
  recording: recording
});

export default rootReducer;
