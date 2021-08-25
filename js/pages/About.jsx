const { NavLink, Route } = ReactRouterDOM

function Team() {
  return (
    <ul>
      <li>Moshe Dabush</li>
      <li>Koren Turgeman</li>
    </ul>
  )
}

function Vision() {
  return (
    <ul>
      <li>Become full stack web developers</li>
      <li>Eat,Code,Desgin,Sleep,Reapet();)</li>
    </ul>
  )
}

export function About() {
  return (
    <section className="About">
      <strong>Welcome To our Apps platform</strong>
      <img src="../assets/css/img/app-logo.png"/>
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Ullam repellat corporis accusantium, magni quasi sequi tempore laudantium quia vel <br />
          temporibus aut aperiam. Temporibus possimus voluptate aliquam repellat <br />
          laborum excepturi ducimus!</p>

      <nav>
        <NavLink to="/about/team" >Team</NavLink>
        <NavLink to="/about/vision">Vision</NavLink>
      </nav>

      <section >
        <Route path="/about/team" component={Team} /> 
        <Route path="/about/vision" component={Vision} />
      </section>

    </section>
  )
}
