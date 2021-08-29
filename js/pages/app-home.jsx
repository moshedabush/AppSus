import { Desk } from "../cmps/desk-img.jsx"
import { AppHome2 } from "./app-home2.jsx"
const { NavLink,Link } = ReactRouterDOM


export function AppHome() {
    return (
        <section className="Home">
  <div id="box">

    <div id="home">
    <div id="particles-js"></div>

      <section className="content">
        <div className="main-content">
        <h1>AppSus</h1>
        <h4>all the services you need in one place, manage your books notes and emails easely with AppSus</h4>
        <a href="#about" className="button-three">Tell me more</a>
        </div>
      </section>
    </div>
    <div id="about">
    <section className="Home">
           <Link to="/"> <img className="home-logo" src="assets/css/img/horse-icon2.png" /></Link>
            <nav>
                <div className="apps-icons">
                <NavLink to="/book" ><img src="assets/css/img/book-icon.png"/></NavLink>
                <NavLink to="/note" className="note-icon" ><img src="assets/css/img/note-icon.png"/></NavLink>
                <NavLink to="/email" ><img src="assets/css/img/email-icon.png"/></NavLink>
                </div>
                <a href="#portfolio" to="/about" className="about-logo"><img src="assets/css/img/about-logo.png"/></a>
                <section className="desk"><img src="assets/css/img/desk.svg"/></section>;
            </nav>
                
        </section>
    </div>
    <div id="portfolio">
 <div className="port-deatiles">


<div className="me-text main-layout">
  <img className="me-img main-layout" src="https://ca.slack-edge.com/T021743D5T8-U025LJVAX42-ea2f51e8112f-512" alt=""></img>
  <h2>Koren turgeman</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    eaque, laboriosam veritatis, quos non quis ad perspiciatis,
    .</p>
  <ul className="social-nav clean-list">

    <li className="footer-link facebook"><a  target="_blank" href="https://www.facebook.com/profile.php?id=100000132532543" className="fab fa-facebook-f"></a></li>
    <li className="footer-link twitter"><a target="_blank" href="social-twitter" className="fab fa-twitter"></a></li>
    <li className="footer-link git"><a target="_blank" href="https://github.com/koren3210" className="fab fa-github"></a></li>
  </ul>

</div>
<div className="me-text main-layout">
  <img className="me-img main-layout" src="https://ca.slack-edge.com/T021743D5T8-U024LTY28KV-c7d51fac2707-512" alt=""></img>
  <h2>Moshe dabush</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
    eaque, laboriosam veritatis, quos non quis ad perspiciatis,
    .</p>
  <ul className="social-nav clean-list">

    <li className="footer-link facebook"><a target="_blank" href="https://www.facebook.com/MosheHD" className="fab fa-facebook-f"></a></li>
    <li className="footer-link twitter"><a target="_blank" href="social-twitter" className="fab fa-twitter"></a></li>
    <li className="footer-link git"><a target="_blank" href="https://github.com/moshedabush" className="fab fa-github"></a></li>
  </ul>

</div>
 </div>
    </div>


  </div>
        </section>
    )
}


