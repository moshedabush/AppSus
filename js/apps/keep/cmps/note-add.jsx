// import { NoteService } from "../../keep/services/note.service.js";
// import { utilService } from "../../../services/util.service.js";
// import { noteApp } from "../pages/note-app.jsx"



export class NoteAdd extends React.Component { 

  constructor(props) {
super(props);
  this.state = {
    note: null,
    value: undefined,
    title: '',
    placeholder: 'enter your note content', 
    type: 'note-txt',
    todos: []
    
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('in did mount!!!!!', this.props);
  }

  
 handleSubmit = (event) =>{
   event.preventDefault();

   const initial = {
    note: null,
    value: undefined,
    title: '',
    placeholder: 'enter your note content', 
    type: 'note-txt',
    todos: []
  };

  this.setState({
    value: '',
    title: '', 
    note:null,
    todos:[]
})


  }

  handleChange(event) {
    const value = event.target.value;

    if(this.state.type !== 'note-todos' || event.target.name === 'title') {
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
console.log('title change' + this.state.title);
  }
  else {
   this.state.todos[event.target.id] = {txt:value, doneAt:Date.now()};
  }
  }


  handleClick = (ev) => {
    ev.preventDefault()
    console.log(ev.target.alt);
    const type = ev.target.alt

    let placeholder;
    
    switch(type) {
      case 'note-img':
        placeholder = 'Enter image url'
        break;
        case 'note-txt':
        placeholder = 'enter your note content'
        break
        case 'note-todos':
       placeholder = 'enter your todo list!'
    }
    
    this.setState({type: type,
    placeholder: placeholder})
  }

  
render() {

  switch(this.state.type) {
    case 'note-txt': 
    return(
      <form id="form1" onSubmit={this.handleSubmit}>
          <div className="bar">
        <textarea  name="value" value={this.state.value} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder={this.state.placeholder}></textarea>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-img" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/post-it.png" alt="note-txt" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/to-do-list.png" alt="note-todos" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/youtube.png" alt="note-video" /></a>
  
      </div>
  
        <input onClick={() => this.props.onAddNote(this.state.type, this.state.value)} className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>
  
        </form>
    )
    case 'note-img': 
    return(
      <form id="form1" onSubmit={this.handleSubmit}>
          <div className="bar">
            <div>

        <input name="value" value={this.state.value} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder={this.state.placeholder}></input>
        <input name="title" value={this.state.title} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="image-title"></input>

            </div>
            <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-img" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/post-it.png" alt="note-txt" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/to-do-list.png" alt="note-todos" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/youtube.png" alt="note-video" /></a>
  
      </div>
  
        <input onClick={() => this.props.onAddNote(this.state.type,this.state.value,this.state.title )} className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>
  
        </form>
    )
    case 'note-video': 
    return(
      <form id="form1" onSubmit={this.handleSubmit}>
          <div className="bar">
            <div>

        <input name="value" value={this.state.value} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="enter-video-url"></input>
        <input name="title" value={this.state.title} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="video-title"></input>

            </div>
            <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-img" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/post-it.png" alt="note-txt" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/to-do-list.png" alt="note-todos" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/youtube.png" alt="note-video" /></a>
  
      </div>
  
        <input onClick={() => this.props.onAddNote(this.state.type,this.state.value,this.state.title )} className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>
  
        </form>
    )

    case 'note-todos': 
    return(
      <form id="form1" onSubmit={this.handleSubmit}>
          <div className="bar">
            <div>

        <input name="title" value={this.state.title} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="todos-title"></input>
        <input name="todos" id="0" value={this.state.todos[0]} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="enter todo"></input>
        <input name="todos" id="1" value={this.state.todos[1]} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="enter todo"></input>
        <input name="todos" id="2" value={this.state.todos[2]} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="enter todo"></input>
        <input name="todos" id="3" value={this.state.todos[3]} onChange={this.handleChange} className="searchbar" type="text" title="Search" placeholder="enter todo"></input>
  

            </div>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/imgs.png" alt="note-img" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/post-it.png" alt="note-txt" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/to-do-list.png" alt="note-todos" /></a>
        <a onClick={this.handleClick} href="#"><img  src="./assets/css/img/youtube.png" alt="note-video" /></a>
  
      </div>
  
        <input onClick={() => this.props.onAddNote(this.state.type,this.state.value,this.state.title, this.state.todos )} className="sumbit-btn"  value="Submit" type="submit" form="form1"></input>
  
        </form>
    )
  }
  
}
}