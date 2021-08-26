const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  state = {
    searchTxt: '',
    msg: ''
  }

  render() {

    return (
      <section className="app-header">
        {/* <h1 onClick={() => this.props.history.goBack()}>AppSus</h1> */}
        <img onClick={() => this.props.history.goBack()} src="assets/css/img/logo-icon2.png" />
        <nav>
          <NavLink activeClassName="my-active" exact to="/">Home</NavLink>
          <NavLink to="/book" >Book</NavLink>
          <NavLink to="/note" >Note</NavLink>
          <NavLink to="/about" >About</NavLink>
          {/* <NavLink to="/about" >About</NavLink> */}
        </nav>
      </section>
    )
  }

}
export const AppHeader = withRouter(_AppHeader)