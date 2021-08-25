import { NoteService } from "../services/note.service";
import { NotesTodos } from './note-todos.jsx';

export function NotePreview({ note, onSelectNote }) {
  switch (note.type) {
    case "note-txt":
      return (
        <div
          className="note-preview"
          onClick={() => {
            onSelectNote(note);
          }}
        >
          <h2>{note.info.txt}</h2>
        </div>
      );
    case "note-img":
      return (
        <div
          style={{ backgroundColor: 'lightblue' }}
          className="note-preview"
          onClick={() => {
            onSelectNote(note);
          }}
        >
          <h2>{note.info.title}</h2>
          <div className="note-img">
            <img src={note.info.url}/>
          </div>
        </div>
      );
    case "note-todos":
      return (
        <div
          className="note-preview"
          onClick={() => {
            onSelectNote(note);
          }}
        >
          <h2>{note.info.label}</h2>
            <NotesTodos key={note.id} note={note} />
        </div>
      );
      default: return (<h1>default</h1>)
  }
}