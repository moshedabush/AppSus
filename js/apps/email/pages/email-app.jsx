import { EmailService } from "../services/email.service.js";
import { EmailPreview } from "../cmps/email-preview.jsx";
import { EmailNav } from "../cmps/email-nav.jsx";

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
    console.log("mounted!!email comp");
    this.loadUser();
  }

  setCriteria = () => {
    const criteria = {
      // optinal status: 'inbox/sent/trash/draft',
      status: "draft",
      txt: "puki",
      isRead: true,
      isStared: true,
      lables: ["important", "romantic"],
    };
    this.setState({ criteria: criteria });
    this.loadEmails();
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
    const { currUser, criteria } = this.state;

    EmailService.emailsToShow(currUser, criteria).then((emails) =>
      this.setState({ emails })
    );
  };

  render() {
    const { emails } = this.state;
    if (!emails) return <React.Fragment>Loading...</React.Fragment>;
    return (
      <div className="email-app-contain">
        <EmailNav />
        <section className="email-list">
          {emails.map((email) => (
            <EmailPreview key={email.id} email={email} />
          ))}
        </section>
      </div>
    );
  }
}
