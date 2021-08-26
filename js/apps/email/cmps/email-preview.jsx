import {LongTxt} from './email-long-txt.jsx';
import { handleChange } from './email-handle.jsx';

const { Link } = ReactRouterDOM;
export function EmailPreview({ email }) {
  return (
    <article className="email-preview">
      <label className="container">
        <input type="checkbox" checked="checked" onChange={handleChange}></input>
        <span className="checkmark"></span>
      </label>
      <h3>{email.subject}</h3>
      {email.body && <LongTxt text={email.body} />}
      <Link to={`/email/${email.id}`}>email details</Link>
    </article>
  );
}
