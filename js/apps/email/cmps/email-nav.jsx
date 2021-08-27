
const { Link } = ReactRouterDOM;
export function EmailNav ({setCriteria }){
    return (
    <section className="email-navbar">
            <Link className="add-email-btn"><img src="assets/css/apps/email/img/compose-icon.png"/></Link>
            <Link to='/email' to="email/sent" onClick={() => { setCriteria('inbox') }}><img src="assets/css/apps/email/img/inbox-icon.png"/></Link>
            <Link ><img src="assets/css/apps/email/img/starred-icon.png"/></Link>
            <Link to="email/sent" onClick={() => { setCriteria('sent') }}><img src="assets/css/apps/email/img/sent-mail-icon.png"/></Link>
            <Link to='email/drafts' onClick={() => { setCriteria('draft') }}><img src="assets/css/apps/email/img/drafts-icon.png"/></Link>

        </section>
        );
}