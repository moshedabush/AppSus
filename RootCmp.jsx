
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './js/cmps/AppHeader.jsx'
import { AppHome } from './js/pages/app-home.jsx'
import { BookApp } from './js/apps/book/pages/BookApp.jsx';
import { noteApp } from './js/apps/keep/pages/note-app.jsx'
// import { About } from './pages/About.jsx';
// import { Home } from './pages/Home.jsx';
// import { BookDetails } from './pages/BookDetails.jsx';

export function App() {
  return (

    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>

          {/* <Route path="/book/:bookId" component={BookDetails}/> */}
        <Route path="/book" component={BookApp}/>
        <Route path="/note" component={noteApp}/>
        {/* <Route path="/about" component={About}/> */}
          <Route path="/" component={AppHome} />
        </Switch>
      </main>
    </Router>
  );
}