import {LongTxt} from './email-long-txt.jsx';
import { handleChange } from './email-handle.jsx';

const { Link } = ReactRouterDOM;
export function MailPreview({ mail }) {
  return (
    <article className="mail-preview">
      <label className="container">
        <input type="checkbox" checked="checked" onChange={handleChange}></input>
        <span className="checkmark"></span>
      </label>
      <h3>{mail.subject}</h3>
      {mail.body && <LongTxt text={mail.body} />}
      <Link to={`/mail/${mail.id}`}>mail details</Link>
    </article>
  );
}
