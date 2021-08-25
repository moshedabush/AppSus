const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  state = {
    searchTxt: '',
    msg: ''
  }

  render() {

    return (
      <section className="app-header">
        <h1 onClick={() => this.props.history.goBack()}>AppSus</h1>
        <nav>
          {/* <NavLink to="/book" >Our Books</NavLink> */}
          {/* <NavLink activeClassName="my-active" exact to="/" >Home</NavLink> */}
          {/* <NavLink to="/about" >About</NavLink> */}
        </nav>
      </section>
    )
  }

}
export const AppHeader = withRouter(_AppHeader)