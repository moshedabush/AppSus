import { utilService } from "../../../services/util.service.js";

export const EmailPreviewExpanded = (props) => {
  const { sentAt, body, from, to, isDraft, isTrash, isSent } = props.email;
  return (
    <section className="email-preview-expanded">
      <div className="email-header">
        {((!isSent && !isDraft) || isTrash) && <div>From: {from}</div>}
        {(isSent || isDraft) && <div>To: {to}</div>}
        <div>Sent at: {utilService.formatDate(sentAt)}</div>
      </div>
      <div>{body}</div>
    </section>
  );
};
