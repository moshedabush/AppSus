import { NoteService } from "../../keep/services/note.service.js";
import { utilService } from "../../../services/util.service.js";
import { noteApp } from "../pages/note-app.jsx";
import { NotesTodos } from "../../email/services/cmps/note-todos.jsx";
export class NoteAdd extends React.Component { 

  constructor(props) {
super(props);
  this.state = {
    value: 'Enter your note content.',
    type: 'note-txt'
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('in did mount!!!!!', this.props);
  }

  
 handleSubmit(event) {
   event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
    const newNote =   {
      id: utilService.makeId(),
      type: this.state.type,
      isPinned: true,
      info: {
        txt: this.state.value,
      }
    }
    console.log(newNote);
NoteService.getNotes().push(newNote)
NoteService.query()

  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  
render() {
  return(
    <form id="form1" onSubmit={this.handleSubmit}>
        <div className="bar">
      <textarea value={this.state.value} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="add new text note"></textarea>
      <a onClick={this.state.type = 'note-img'}href="#"><img  src="./assets/css/img/imgs.png" alt="" /></a>
      <a onClick={this.state.type = 'note-text'} href="#"><img  src="./assets/css/img/imgs.png" alt="" /></a>
      <a  onClick={this.state.type = 'note-img'} href="#"><img  src="./assets/css/img/imgs.png" alt="" /></a>

    </div>

      <input className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>

      </form>
  )
}
}