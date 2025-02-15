import { Outlet } from "react-router-dom"
import Navbar from "./share/Navbar"
import Footer from "./share/Footer/Footer"



function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
