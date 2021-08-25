
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

<<<<<<< HEAD
import { AppHeader } from './js/cmps/AppHeader.jsx';
// import { BookApp } from './pages/BookApp.jsx';
=======
import { AppHeader } from "./js/cmps/AppHeader.jsx"
import { AppHome } from "./js/pages/app-home.jsx"
>>>>>>> b3a8010ac182e26716ad157f3a597ab31c793634
// import { About } from './pages/About.jsx';
// import { BookApp } from './pages/BookApp.jsx';
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

          {/* <Route path="/book/:bookId" component={BookDetails}/>
        <Route path="/book" component={BookApp}/>
        <Route path="/about" component={About}/> */}
          <Route path="/" component={AppHome} />
        </Switch>
      </main>
    </Router>
  );
}