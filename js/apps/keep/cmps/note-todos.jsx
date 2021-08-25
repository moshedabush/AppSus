export function NotesTodos({ note }) {
  return (
    <ul>
      {note.info.todos.map((todo) => (
        <li key={todo.doneAt}>{todo.txt}</li>
      ))}
    </ul>
  );
}
