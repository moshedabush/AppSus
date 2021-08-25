import { NoteService } from "../services/note.service";

export function NotePreview({ note, onSelectnote }) {

  if(note.type === 'note-txt')  {
  return  <div className="note-preview" onClick={() => { onSelectnote(note) }}>
    <h2>{note.info.txt}</h2>
    </div>
  }



  else if(note.type = 'note-img') { 
    return <div style={'backgroundColor:' + note.style.backgroundColor} className="note-preview" onClick={() => { onSelectnote(note) }}>
    <h2>{note.info.title}</h2>
    <div className="note-img">
        <img src={note.info.url} />
    </div>
</div>

  }


  else if(note.type = 'note-todos') { 
    return <div  className="note-preview" onClick={() => { onSelectnote(note) }}>
    <h2>{note.info.label}</h2>
    <ul className="note-todos">
      {NoteServi}
    </ul>
</div>
  }
}

