import { NotePreview } from './note-preview.jsx'


export function BookList({ notes, onSelectedNote }) {

    return <section className="note-list">
        {notes.map(note => <NotePreview key={note.id} note={note}
            onSelectedNote={onSelectedNote} />)}
    </section>
}