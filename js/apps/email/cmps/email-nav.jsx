const { Link } = ReactRouterDOM;

export function EmailNav({ setCriteria }) {
    return (
    <section className="email-navbar">

            <Link to="/email" onClick={() => { setCriteria('all') }}><img src="assets/css/apps/email/img/all-icon.png"/></Link>
            <Link to="/email" onClick={() => { setCriteria(null) }}><img src="assets/css/apps/email/img/inbox-icon.png"/></Link>
            <Link ><img src="assets/css/apps/email/img/starred-icon.png"/></Link>
            <Link to="email/sent" onClick={() => { setCriteria('sent') }}><img src="assets/css/apps/email/img/sent-mail-icon.png"/></Link>
            <Link to='email/drafts' onClick={() => { setCriteria('draft') }}><img src="assets/css/apps/email/img/drafts-icon.png"/></Link>
            <Link to='email/trash' onClick={() => { setCriteria('trash') }}><img src="assets/css/apps/email/img/trash-icon.png"/></Link>

        </section>
        );
}