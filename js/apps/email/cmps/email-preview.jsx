import { utilService } from '../../../services/util.service.js';
import { EmailPreviewExpanded } from "./email-preview-expanded.jsx";

const { Link } = ReactRouterDOM;
export class EmailPreview extends React.Component {
  state = {
    isExpanded: false,
  };

  onPreviewClick = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { isExpanded } = this.state;
    const { email } = this.props;
    return (
      <div>
        <article onClick={this.onPreviewClick} className="email-preview">
          <label className="container">
            <span className="checkmark"></span>
          </label>
          <h3>{email.subject}</h3>
          <div className="email-date">{utilService.formatDate(email.sentAt)}</div>
        </article> 
        {isExpanded && <EmailPreviewExpanded email={email} />}
      </div>
    );
  }
}
