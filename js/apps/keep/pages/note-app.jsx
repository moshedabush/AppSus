import { NoteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';

export class noteApp extends React.Component {
  state = {
    notes: null,
    // filterBy: '',
    selectedNote: null,
  };

  componentDidMount() {
    console.log('in did mount');
    this.loadNotes();
  }

  loadNotes = () => {
    console.log('notes loaded!');
    NoteService.query().then((notes) => {
      // console.log(note);
      this.setState({ notes });
    });
  };


  onSelectNote = (selectedNote) => {
    this.setState({ selectedNote });
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
