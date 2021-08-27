const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { AppHeader } from "./js/cmps/AppHeader1.jsx";
// import { AppHeader } from "./js/cmps/AppHeader.jsx";
import { AppHome } from "./js/pages/app-home.jsx";
import { BookApp } from "./js/apps/book/pages/BookApp.jsx";
import { noteApp } from "./js/apps/keep/pages/note-app.jsx";
import { About } from "./js/pages/About.jsx";
import { BookDetails } from "./js/apps/book/pages/BookDetails.jsx";
import { AddReview } from "./js/apps/book/cmps/AddReview.jsx";
import { EmailApp } from "./js/apps/email/pages/email-app.jsx";


export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/book/add/:bookId" component={AddReview} />
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/note" component={noteApp} />
          <Route path="/email/sent" component={EmailApp} />
          <Route path="/email" component={EmailApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={AppHome} />
        </Switch>
      </main>
    </Router>
  );
}
