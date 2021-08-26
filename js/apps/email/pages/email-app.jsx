import { mailService } from '../services/email.service.js';
import { MailPreview } from '../cmps/email-preview.jsx';

export class MailApp extends React.Component {
    state = {
        currUser: null,
        mails: null,
        criteria: {
            status: null,
            txt: null,
            isRead: null,
            isStared: null,
            lables: null
        }
    }

    componentDidMount() {
      console.log('mounted!!mail comp');
        this.loadUser();
    }



    setCriteria = () => {
 
      
     const criteria = {
          // optinal status: 'inbox/sent/trash/draft',
          status: 'draft',
          txt: 'puki',
          isRead: true,
          isStared: true,
          lables: ['important', 'romantic'],
      
      }
      this.setState({criteria : criteria})
      this.loadMails();

    }

    loadUser = () => {
        console.log('loading...')

        mailService.getUser()
            .then(user => this.setState({ currUser: user }, () => { this.loadMails() }))
    }

    loadMails = () => {
        const { currUser, criteria } = this.state;

        mailService.mailsToShow(currUser, criteria)
            .then(mails => this.setState({ mails }));
    }

    render() {
        const { mails } = this.state;
        if (!mails) return <React.Fragment>Loading...</React.Fragment>
        return <section className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        </section>
    }
}