import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Blog from "../blog/Blog";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Bio from "../bio/Bio";
import Contact from "../contact/Contact";

import './NavBar.css';

export default function NavBar() {

    return (
        <Router>
            <div>
                <nav className="nav-bar">
                    <ul className="nav-pills">
                        <li>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/portfolio" exact activeClassName="active">Portfolio</NavLink>
                        </li>
                        <li>
                        <NavLink to="/bio" exact activeClassName="active">Bio</NavLink>
                        </li>
                        <li>
                        <NavLink to="/blog" exact activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
  
                <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/bio">
                        <Bio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>

      </Router>
    );
  }