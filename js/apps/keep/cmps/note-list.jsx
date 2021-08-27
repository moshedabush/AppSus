import { NotePreview } from './note-preview.jsx';

export function NoteList({
  notes,
  onSelectNote,
  onRemoveNote,
  pinnedNotes,
  onPinUnpinNote,
  onDuplicateNote,
}) {
  return (
    <section>
      <div className="pinned-notes">
        {pinnedNotes && pinnedNotes.map((note) => (
          <NotePreview
            key={note.id}
            note={note}
            onRemoveNote={onRemoveNote}
            onDuplicateNote={onDuplicateNote}
            onPinUnpinNote={onPinUnpinNote}
          />
        ))}
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <NotePreview
            key={note.id}
            note={note}
            onSelectNote={onSelectNote}
            onRemoveNote={onRemoveNote}
            onPinUnpinNote={onPinUnpinNote}
            onDuplicateNote={onDuplicateNote}
          />
        ))}
      </div>
    </section>
  );
}
