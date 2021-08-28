export class EmailCompose extends React.Component {
  state = {
    isActive: false,
    composeData: {
      to: "",
      subject: "",
      body: "",
    },
  };

  addEmail = (ev) => {
    ev.preventDefault();
  };

  onToggleActive = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      composeData: { ...prevState.composeData, [field]: value },
    }));
  };

  render() {
    const { sentEmail } = this.props;
    const { composeData } = this.state;
    const { to, subject, body } = this.state.composeData;

    return (
      <section className="email-add">
        {this.state.isActive && (
          <form className="email-compose" onSubmit={this.addEmail}>
            <div className="compose-input">
              <label htmlFor="to"></label>
              <input
                required
                type="email"
                name="to"
                id="to"
                value={to}
                onChange={this.handleChange}
                placeholder="To:"
              />
            </div>
            <div className="compose-input">
              <label htmlFor="subject"></label>
              <input
                required
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={this.handleChange}
                placeholder="Subject:"
              />
            </div>
            <div className="compose-input">
              <label htmlFor="body"></label>
              <textarea
                required
                type="text"
                name="body"
                id="body"
                value={body}
                onChange={this.handleChange}
              />
            </div>

            <button
              type="button"
              onClick={this.addEmail}
              onClick={() => {
                sentEmail(composeData);
              }}
            >
              Send!
            </button>
          </form>
        )}
        <img
          className="add-email-btn"
          onClick={this.onToggleActive}
          src="assets/css/apps/email/img/compose-icon.png"
        />
      </section>
    );
  }
}
