
export class EmailSearch extends React.Component {
  state = {
    searchBy: {
      txt: "",
      isRead: "",
    },
  };

  handleChange = (ev) => {
      
      
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState(
      { searchBy: { ...this.state.searchBy, [field]: value } },
      () => {
        this.props.setSearch(this.state.searchBy);
      }
    );
  };

  render() {
    const { txt, isRead } = this.state.searchBy;

    return (
      <form className="email-search">
        <input
          type="search"
          name="txt"
          id="txt"
          value={txt}
          placeholder=" Search Email"
          onChange={this.handleChange}
        />
        {/* <select
          className="email-search-isread-btn"
          name="isRead"
          id="isRead"
          value={isRead}
          onChange={this.handleChange}
        >
          <option value=""></option>
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select> */}
      </form>
    );
  }
}
