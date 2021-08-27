import { ActionBar } from './action-bar.jsx';
import { NoteDynamic } from './note-dynamic.jsx';
import { NoteService } from '../services/note.service.js';

export class NotePreview extends React.Component {
  state = {
    note: null,
  };

  componentDidMount() {
    const note = this.props.note;
    console.log('prev comp moundted!!');
    this.setState({ note });
  }

  handleColorChange = (color) => {
    const note = this.state.note;
    NoteService.changeColor(note.id, color);
    this.setState({ note });
  };

  render() {
    const { note } = this.state;
    if (!note) return <div>Loading...</div>;

    return (
      <section className="note-preview tile" id="myDivHeader" style={{backgroundColor: note.style.backgroundColor}}>
        <NoteDynamic
          note={note}
          onRemoveNote={this.props.onRemoveNote}
        />
        <ActionBar
          note={note}
          handleColorChange={this.handleColorChange}
          onDuplicateNote={this.props.onDuplicateNote}
          onPinning={this.props.onPinning}
        />
      </section>
    );
  }
}
