import { EmailService } from "../services/email.service.js";
import { EmailNav } from "../cmps/email-nav.jsx";
import { EmailList } from "../cmps/emails-list.jsx";
import { EmailSearch } from "../cmps/email-search.jsx";
import { Loader } from "../../../cmps/loader.jsx";

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
    if(!this.state.status)this.setCriteria('inbox');
    this.setState((prevState) => ({
      criteria: { ...prevState.criteria, txt },
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
    if (!emails) return <Loader/>;
    return (
      <section>
        <EmailSearch setSearch={this.setSearch} />
      <div className="emails-container">
        <EmailNav setCriteria={this.setCriteria} />
        <EmailList emails={emails} />
      </div>
      </section>
    );
  }
}
