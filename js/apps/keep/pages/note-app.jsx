import { NoteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteAdd } from '../cmps/note-add.jsx';

export class noteApp extends React.Component {
  state = {
    notes: null,
    // filterBy: '',
    selectedNote: null,
    pinnedNotes: null
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


  onRemoveNote = (noteId) => {
    NoteService.deleteNote(noteId).then(this.loadNotes);  
  }
  onDuplicateNote = (noteId) => {
    NoteService.duplicateNote(noteId).then(this.loadNotes)
}

onPinning = (note) => {
    NoteService.pinNote(note).then(this.loadNotes)
}

  onSelectNote = (selectedNote) => {
    this.setState({ selectedNote });
}

onAddNote = (noteType, noteValue) => {
  NoteService.addNote(noteType,noteValue).then(this.loadNotes)
}


  render() {
    const { notes, pinnedNotes } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section>
          <React.Fragment>
            <NoteAdd notes={notes} onAddNote={this.onAddNote} />
            <NoteList 
            notes={notes} 
            onSelectNote={this.onSelectNote} 
            onRemoveNote={this.onRemoveNote}
            pinnedNotes={pinnedNotes}
            onDuplicateNote={this.onDuplicateNote}
            onPinning={this.onPinning} /> 
          </React.Fragment>
      </section>
    );
  }
}
