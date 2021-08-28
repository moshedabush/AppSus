export function NoteTodos({ note }) {
  return (
    <ul className="todos-list">
      {note.info.todos.map((todo) => (
        <li  key={todo.doneAt}>{todo.txt}</li>
      ))}
    </ul>
  );
}
