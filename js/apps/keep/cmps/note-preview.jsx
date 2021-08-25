// import { NoteService } from "../services/note.service";
import { NotesTodos } from "./note-todos.jsx";

export function NotePreview({ note, onSelectNote }) {

  if(note.type === 'note-txt')  {
  return  <div className="note-preview" onClick={() => { onSelectNote(note) }}>
    <h2>{note.info.txt}</h2>
    </div>
  }



  else if(note.type = 'note-img') { 
    return <div   style={{backgroundColor: "lightblue"}} className="note-preview" onClick={() => { onSelectNote(note) }}>
    <h2>{note.info.title}</h2>
    <div className="note-img">
        <img src={note.info.url} />
    </div>
</div>

  }


//   else if(note.type === 'note-todos') { 
    
//     return <div  className="note-preview" onClick={() => { onSelectNote(note) }}>
//     <h2>{note.info.label}</h2>
//     <ul className="note-todos">
//       <NotesTodos note={note}/>  
//     </ul>
// </div>
//   }
}

