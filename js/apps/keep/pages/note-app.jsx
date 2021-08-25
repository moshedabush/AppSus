import { noteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';

export class noteApp extends React.Component {
  state = {
    notes: null,
    // filterBy: '',
    selectedNote: null,
  };

  componentDidMount() {
    console.log('in did mount');
    this.loadBooks();
  }

  loadBooks = () => {
    console.log('notes loaded!');
    noteService.query(this.state.notes).then((not) => {
      console.log(not);
      this.setState({ not });
    });
  };


  onSelectNote = (selectedBook) => {
    this.setState({ selectedBook });
}


  render() {
    const { notes, selectedNote } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section>
        {!selectedNote && (
          <React.Fragment>
            <NoteList notes={notes} onSelectNote={this.onSelectNote} /> 
          </React.Fragment>
        )}
        {selectedNote && (
          <NoteDetails
            note={selectedNote}
            // onBack={() => this.onSelectNote(null)}
          />
        )}
      </section>
    );
  }
}
