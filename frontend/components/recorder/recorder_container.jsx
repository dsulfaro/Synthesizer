import { connect } from 'react-redux';
import { startRecording, stopRecording, addNotes } from '../../actions/tracks_actions.jsx';
import Recorder from './recorder';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: () => dispatch(addNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
