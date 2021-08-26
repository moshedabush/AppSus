import { NotePreview } from './note-preview.jsx'


export function NoteList({ notes, onSelectNote, onRemoveNote }) {

    return <section className="note-list">
        {notes.map(note => <NotePreview key={note.id} note={note}
            onSelectNote={onSelectNote}  onRemoveNote={onRemoveNote} />)}
    </section>
}