import { Desk } from "../cmps/desk-img.jsx"

const { NavLink } = ReactRouterDOM


export function AppHome() {
    return (
        <section className="Home">
           <NavLink to="/"> <h1>AppSus</h1></NavLink>
            <nav>
                <NavLink to="/book" >Book</NavLink>
                <NavLink to="/note" >Note</NavLink>
                <NavLink activeClassName="my-active" exact to="/" >Home</NavLink>
                <Desk/>
            </nav>
                
        </section>
    )
}
