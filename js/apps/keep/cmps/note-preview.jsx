import { NoteService } from "../services/note.service";
import { NotesTodos } from './note-todos.jsx';
import { NotesOptions } from './note-options.jsx';


export function NotePreview({ note, onSelectNote, onRemoveNote }) {
  switch (note.type) {
    case "note-txt":
      return (
        <div id="mydivheader"
        className="note-preview"
        onClick={() => {
          onSelectNote(note);
        }}
        >
                    <img onClick={() => {
        onRemoveNote(note.id);
      }}
        className="close-btn"
        src="assets/css/apps/book/img/close.png"
      />
          <h2>{note.info.txt}</h2>
        </div>
      );
    case "note-img":
      return (
        <div id="mydiv"
          style={{ backgroundColor: 'lightblue' }}
          className="note-preview"
          // onClick={() => {
          //   onSelectNote(note);
          // }}
        >
                    <img onClick={() => {
        onRemoveNote(note.id);
      }}
        className="close-btn"
        src="assets/css/apps/book/img/close.png"
      />
          <h2>{note.info.title}</h2>
          <div id="mydivheader"className="note-img">
            <img src={note.info.url}/>
          </div>
        </div>
      );
    case "note-todos":
      return (
        <div id="mydivheader"
          className="note-preview"
          onClick={() => {
            onSelectNote(note);
          }}
        >
                    <img onClick={() => {
        onRemoveNote(note.id);
      }}
        className="close-btn"
        src="assets/css/apps/book/img/close.png"
      />
          <h2>{note.info.label}</h2>
        </div>
      );
      default: return (<h1>default</h1>)
  }
}