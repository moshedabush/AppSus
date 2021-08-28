
export class ChangColor extends React.Component {

  state= {
    color: this.props.note.style.backgroundColor
  }
  componentDidMount() {
    console.log('color comp moundted!!!!!!!!!!!!!!!');
  }

  handleChange = (ev) => {
    this.props.handleColorChange(ev.target.value)
    this.setState({color:ev.target.value})
  };

  render() {
    return    <input onChange={this.handleChange} type="color" id="body" name="body"
            value={this.state.color}></input>

    
  }
}