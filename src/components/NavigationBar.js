import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Bio from '../components/Bio'

import '../styles/NavBar.css'

export default function NavBar() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <nav className='nav-bar'>
          <ul className='nav-pills'>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/portfolio' exact activeClassName='active'>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' exact activeClassName='active'>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/about'>
            <Bio />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
