import { EmailService } from "../services/email.service.js";
import { EmailNav } from "../cmps/email-nav.jsx";
import { EmailList } from "../cmps/emails-list.jsx";
import { EmailSearch } from "../cmps/email-search.jsx";
import { Loader } from "../../../cmps/loader.jsx";
import { EmailCompose } from "../cmps/email-compose.jsx";
import { emails } from "../services/data.service.js";

export class EmailApp extends React.Component {
  state = {
    currUser: null,
    emails: null,
    criteria: {
      status: null,
      txt: null,
      isRead: null,
      isStared: null,
      lables: null,
    },
  };

  componentDidMount() {
    this.loadEmails();
    this.loadUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.criteria !== prevState.criteria) {
      this.loadEmails();
    }
  }

  setCriteria = (status) => {
    this.setState((prevState) => ({
      criteria: { ...prevState.criteria, status },
    }));
  };

  setSearch = ({ txt }) => {
    if (!this.state.status) this.setCriteria("inbox");
    this.setState((prevState) => ({
      criteria: { ...prevState.criteria, txt },
    }));
  };

  loadUser = () => {
    EmailService.getUser().then((user) => this.setState({ currUser: user }));
  };

  loadEmails = () => {
    const { criteria } = this.state;
    EmailService.emailsToShow(criteria).then((emails) => {
      this.setState({ emails });
    });
  };
  onSentEmail = (val) => {
    EmailService.addEmail(val,this.state.criteria).then((emails) => {
      this.setState({ emails});
    });
  };

  render() {
    const { emails } = this.state;
    if (!emails) return <Loader />;
    return (
      <section>
        <EmailSearch setSearch={this.setSearch} />
        <div className="emails-container">
          <div className="email-navbar">
            <EmailCompose sentEmail={this.onSentEmail} />
          <EmailNav setCriteria={this.setCriteria} />
          </div>
          <EmailList emails={emails} />
        </div>
      </section>
    );
  }
}
