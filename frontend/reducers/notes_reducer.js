import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones';

const _defaultState = [];

const NotesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {

    case KEY_PRESSED:
      if (!oldState.includes(action.key) && NOTE_NAMES.includes(action.key)){
        return [...oldState, action.key];
      }
      else {
        return oldState;
      }

    case KEY_RELEASED:
      if (oldState.includes(action.key) && NOTE_NAMES.includes(action.key)){
        let idx = oldState.indexOf(action.key);
        // let newState = oldState.slice(0, idx).concat(oldState.slice(idx + 1));
        // return newState;
        return [...oldState.slice(0, idx), ...oldState.slice(idx + 1)];
      }
      else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default NotesReducer;
