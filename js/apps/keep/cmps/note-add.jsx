import { NoteService } from "../../keep/services/note.service.js";
// import { utilService } from "../../../services/util.service.js";
// import { noteApp } from "../pages/note-app.jsx"
export class NoteAdd extends React.Component { 

  constructor(props) {
super(props);
  this.state = {
    note: null,
    value: 'Enter your note content.',
    type: 'note-txt'
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('in did mount!!!!!', this.props);
  }

  
 handleSubmit = (event) =>{
   event.preventDefault();
   event.stopPropogation()
    console.log('A name was submitted: ' + this.state.value);
    const {value, type} = this.state

    NoteService.addNote(type,value)

  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleClick = (ev) => {
    ev.preventDefault()
    console.log(ev.target.alt);
    const type = ev.target.alt

    let value;
    
    switch(type) {
      case 'note-img':
        value = 'Enter image url'
        break;
        case 'note-txt':
        value = 'enter your note content'
        break
        case 'note-todos':
       value = 'enter your todo list!'
    }
    
    this.setState({type: type,
    value: value})
  }

  
render() {
  return(
    <form id="form1" onSubmit={this.handleSubmit}>
        <div className="bar">
      <textarea value={this.state.value} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="add new text note"></textarea>
      <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-img" /></a>
      <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-txt" /></a>
      <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-todos" /></a>

    </div>

      <input onClick={() => this.props.onAddNote(this.state.type, this.state.value)} className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>

      </form>
  )
}
}