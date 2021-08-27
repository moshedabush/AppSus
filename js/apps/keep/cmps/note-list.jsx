import { NotePreview } from './note-preview.jsx';

export function NoteList({
  notes,
  onSelectNote,
  onRemoveNote,
  pinnedNotes,
  onPinning,
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
            onPinning={onPinning}
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
            onPinning={onPinning}
            onDuplicateNote={onDuplicateNote}
          />
        ))}
      </div>
    </section>
  );
}
