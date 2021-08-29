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
          <div className="login-box">
            <h2>New messege</h2>
          <form  onSubmit={this.addEmail}>
            <div className="user-box">
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
              <label>To adress</label>
            </div>
            <div className="user-box">
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
                            <label>Subject</label>

            </div>
            <h2 className="text-area">messege:</h2>
            <div className="compose-input">
              <label htmlFor="body"></label>
              <textarea
                required
                rows="20" cols="20"
                type="text"
                name="body"
                id="body"
                value={body}
                onChange={this.handleChange}
              />

            </div>

            <a
              type="button"
              onClick={this.addEmail}
              onClick={() => {
                this.onToggleActive();
                sentEmail(composeData);
              }}
            >Send!
            </a>
          </form>
          </div>
        )}
 <a   onClick={this.onToggleActive}
 data-toggle="modal" title="Compose" className="btn btn-compose add-email-btn">
Compose
</a>
      </section>
    );
  }
}
