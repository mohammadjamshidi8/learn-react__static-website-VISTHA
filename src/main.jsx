import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import Prices from './Prices'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Prices/>
  </React.StrictMode>,
)
