import { Desk } from "../cmps/desk-img.jsx"

const { NavLink,Link } = ReactRouterDOM


export function AppHome() {
    return (
        <section className="Home">
           <Link to="/"> <img className="home-logo" src="assets/css/img/horse-icon2.png" /></Link>
            <nav>
                <div className="apps-icons">
                <NavLink to="/book" ><img src="assets/css/img/book-icon.png"/></NavLink>
                <NavLink to="/note" className="note-icon" ><img src="assets/css/img/note-icon.png"/></NavLink>
                <NavLink to="/email" ><img src="assets/css/img/email-icon.png"/></NavLink>
                </div>
                <NavLink to="/about" className="about-logo"><img src="assets/css/img/about-logo.png"/></NavLink>
                <Desk/>
            </nav>
                
        </section>
    )
}
