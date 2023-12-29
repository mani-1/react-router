import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from './page/Home'
import About from './page/About'
import NotFound from "./page/NotFound"
import RootLayout from "./layout/RootLayout"
import HelpLayout from "./layout/HelpLayout"
import Faq from "./page/help/Faq"
import Contact from "./page/help/Contact"
import Careers, { careersLoader} from "./page/career/Careers"
import CareerLayout from "./layout/CareerLayout"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>

      {/* Help laypout */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>

      {/* Careerlayout */}
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careersLoader}></Route>
      </Route>

      {/* Error Handling */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App