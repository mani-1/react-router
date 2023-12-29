import { Outlet, NavLink } from "react-router-dom"
function RootLayout() {
  return (
  <div>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default RootLayout