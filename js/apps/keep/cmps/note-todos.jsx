export function NoteTodos({ note , onDoneTodo}) {
  return (
    <ul className="todos-list">
      {note.info.todos.map((todo) => (

        <li  key={todo.id}> 
       <input type="checkbox" checked={todo.doneAt ? '' : 'checked'}  onChange={() => {onDoneTodo(todo.id) }} />
       <span onClick={() => {onDoneTodo(todo.id) }}>{todo.txt}</span>
       
       </li>
 
      ))}
    </ul>
  );
}
