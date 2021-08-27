import { EmailService } from "../services/email.service.js";
import { EmailNav } from "../cmps/email-nav.jsx";
import { EmailList } from "../cmps/emails-list.jsx";

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
    // this.loadUser();
    this.loadEmails();
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

  loadUser = () => {
    console.log("loading...");

    EmailService.getUser().then((user) =>
      this.setState({ currUser: user }, () => {
        this.loadEmails();
      })
    );
  };

  loadEmails = () => {
    const { criteria } = this.state;
    EmailService.emailsToShow(criteria).then((emails) => {
      this.setState({ emails });
    });
  };

  render() {
    const { emails } = this.state;
    console.log(this.state);

    const { location } = this.props;
    if (!emails) return <React.Fragment>Loading...</React.Fragment>;
    return (
      <div className="email-app-contain">
        <EmailNav setCriteria={this.setCriteria} />
        <EmailList emails={emails} />
      </div>
    );
  }
}
