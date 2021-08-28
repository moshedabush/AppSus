import { ActionBar } from './note-action-bar.jsx';
import { NoteDynamic } from './note-dynamic.jsx';
import { NoteService } from '../services/note.service.js';
import { Loader } from '../../../cmps/loader.jsx';


export class NotePreview extends React.Component {
  state = {
    note: null,
  };

  componentDidMount() {
    const note = this.props.note;
    this.setState({ note });
  }

  handleColorChange = (color) => {
    const note = this.state.note;
    NoteService.changeColor(note.id, color);
    this.setState({ note });
  };


  onDoneTodo = (todoId) => {
    NoteService
      .toggleTodo(this.state.note.id, todoId)
      .then((noteAfteTodo) => this.setState({ note: noteAfteTodo }));
  };


  render() {
    const { note } = this.state;
    if (!note) return   <Loader/>

    return (
      <section className="note-preview tile" id="myDivHeader" style={{backgroundColor: note.style.backgroundColor}}>

        <NoteDynamic
          note={note}
          onRemoveNote={this.props.onRemoveNote}
          onDoneTodo={this.onDoneTodo}
        />
        <ActionBar
          note={note}
          handleColorChange={this.handleColorChange}
          onDuplicateNote={this.props.onDuplicateNote}
          onPinning={this.props.onPinning}
          onRemoveNote={this.props.onRemoveNote}

        />
      </section>
    );
  }
}
