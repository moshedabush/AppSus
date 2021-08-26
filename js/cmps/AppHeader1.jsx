const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader1 extends React.Component {
  state = {
    searchTxt: '',
    msg: '',
  };

  render() {
    return (
      <section className="header">
        <img
          className="header-img"
          onClick={() => this.props.history.goBack()}
          src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvKCrRNOmx3NwXs1M3EMoAJtliIkj...Fr8fs8 "
        />
        <div className="search-container">
          <form action="/search" method="get">
            <input
              className="search"
              id="searchleft"
              type="search"
              name="q"
              placeholder="Search"
            ></input>
            <label className="button searchbutton" htmlFor="searchleft">
              <span className="mglass">&#9906;</span>
            </label>
          </form>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
        <li>
            <NavLink to="/email">Email</NavLink>
          </li>
          <li>
            <NavLink activeClassName="my-active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/book">Book</NavLink>
          </li>
          <li>
            <NavLink to="/note">Note</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
 
        </ul>
      </section>
    );
  }
}

export const AppHeader = withRouter(_AppHeader1);
