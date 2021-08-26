import { NoteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteAdd } from '../cmps/note-add.jsx';

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


  onRemoveNote = (noteId) => {
    NoteService.deleteNote(noteId).then(this.loadNotes);



    
  }

  onSelectNote = (selectedNote) => {
    this.setState({ selectedNote });
}


  render() {
    const { notes } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section>
          <React.Fragment>
            <NoteAdd notes={notes}/>
            <NoteList notes={notes} onSelectNote={this.onSelectNote} onRemoveNote={this.onRemoveNote} /> 
          </React.Fragment>
      </section>
    );
  }
}
