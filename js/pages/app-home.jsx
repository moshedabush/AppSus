import { Desk } from "../cmps/desk-img.jsx"

const { NavLink } = ReactRouterDOM


export function AppHome() {
    return (
        <section className="Home">
           <NavLink to="/"> <h1>AppSus</h1></NavLink>
            <nav>
                <NavLink activeClassName="my-active" exact to="/" >Home</NavLink>
                <NavLink to="/book" >Book</NavLink>
                <NavLink to="/note" >Note</NavLink>
                <NavLink to="/about" >About</NavLink>
                <Desk/>
            </nav>
                
        </section>
    )
}
