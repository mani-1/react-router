import { Outlet, NavLink } from "react-router-dom"
function RootLayout() {
  return (
  <div>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default RootLayout