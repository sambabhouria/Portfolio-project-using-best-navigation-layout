import React from "react"
import Navbar from "./Navbar"
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </Router>
  )
}

export default Layout
