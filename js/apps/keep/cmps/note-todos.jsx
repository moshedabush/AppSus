
export function NoteTodos(note) {
  var todos = ''
  note.info.todos.map(todo => todos += `<li>${todo.txt}</li>`)
  return todos; 
}