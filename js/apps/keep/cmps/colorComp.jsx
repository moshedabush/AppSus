
export class ChangColor extends React.Component {


  componentDidMount() {
    console.log('color comp moundted!!!!!!!!!!!!!!!');
  }

  handleChange = (ev) => {
    this.props.handleColorChange(ev.target.value)
  };

  render() {
    return    <input onChange={this.handleChange} type="color" id="body" name="body"
            value="#f6b73c"></input>

    
  }
}