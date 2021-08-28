const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
     searchTxt: '',
    placeholder: 'search'
};
    this.handleChange = this.handleChange.bind(this);
  } 

 handleChange(event) {
  this.setState({searchTxt: event.target.value});
}


handleClick = (ev) => {
  ev.preventDefault()
  const type = ev.target.name

  let holder;
  
  switch(type) {
    case 'note':
      holder = 'search note'
      break;
      case 'email':
      holder = 'search email'
      break
      case 'book':
     holder = 'search book'
  }
  
  this.setState({placeholder: holder})
}


  render() {
    return (
      <section className="header">
        <img
          className="header-img"
          onClick={() => this.props.history.goBack()}
          src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvKCrRNOmx3NwXs1M3EMoAJtliIkj...Fr8fs8 "
        />

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink  activeClassName="my-active" exact to="/">
              Home
            </NavLink>
          </li>
        <li onClick={this.handleClick}>
            <NavLink  name="email" to="/email">Email</NavLink>
          </li>
          <li onClick={this.handleClick}>
            <NavLink name="book" to="/book">Book</NavLink>
          </li>
          <li onClick={this.handleClick} >
            <NavLink name="note" to="/note">Note</NavLink>
          </li>
 
        </ul>
      </section>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);





