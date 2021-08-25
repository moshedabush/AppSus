import {NotePreview} from './note-preview.jsx'

export function NotesTodos({note}) { 

  return (
    <ul>
      {note.info.todos.map(todo => <li>{todo.txt}</li>)}
    </ul>
  )
}

