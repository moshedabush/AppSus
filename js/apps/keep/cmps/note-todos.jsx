import {NotePreview} from './note-preview.jsx'

export class NotesTodos extends React.Component {
  state = {
  note: null,
};
componentDidMount() {
console.log('component did mount!!');
}
​
  render() {
    const { note } = this.props;
    return (
      <h1>
        {note.info.label}
      </h1>
      // note.info.todos.map((todo) => (`<li>${todo.txt}</li>`))
    );
  }
}