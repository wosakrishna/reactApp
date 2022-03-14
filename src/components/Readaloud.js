import React from 'react'
import About from './About'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const Readaloud = () => {
  return (
      
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 bg-dark text-white">
    <Tab eventKey="home" title="Home" >
      <Home />
    </Tab>
    <Tab eventKey="profile" title="About">
      <About />
    </Tab>
    
  </Tabs>
  )
}

export default Readaloud