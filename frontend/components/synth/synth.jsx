import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from "jquery";
import NoteKey from './note_key';

class Synth extends React.Component {

  constructor() {
    super();
    let notes = [];
    NOTE_NAMES.forEach( key => {
      notes.push(new Note(TONES[key]));
    });
    this.notes = notes;
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) { // play notes present in state
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  render () {
    this.playNotes();
    return (
      <div>
        <ul>
          {NOTE_NAMES.map( key => (<li key={key}><NoteKey note={key} pressed={this.props.notes.includes(key) ? true : false}/></li>))}
        </ul>
      </div>
    );
  }
}

export default Synth;
