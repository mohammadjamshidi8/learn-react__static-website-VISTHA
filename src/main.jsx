import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import Prices from './Prices'
import Blog from './Blog'
import Comments from './Comments'
import ContactUs from './ContactUs'
import Footer from './Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Prices/>
    <Blog/>
    <Comments/>
    <ContactUs/>
    <Footer/>
  </React.StrictMode>,
)
