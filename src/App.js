import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './page/Home'
import About from './page/About'
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App