import React, {Component} from 'react'
import {Navbar,NavItem} from 'react-materialize'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class NavbarContainer extends Component {

  render(){
    return(
      <Router>
        <div>
          <Navbar brand='Eric Lum' right>
            <NavItem>
              <Link to='/'>
              Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to='/contact'>
              Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/about'>
              About Eric
              </Link></NavItem>
            <NavItem><Link to='/projects'>
            Projects
            </Link></NavItem>
          </Navbar>

        <Route exact path="/" component={Home} />
        <Route path= "/about" component={About} />
        <Route path = "/projects" component={Projects} />
        <Route path ="/contact" component={Contact} />
        </div>
      </Router>

    )
  }
}

export default NavbarContainer
