import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                        <Link to="/bio">Bio</Link>
                        </li>
                        <li>
                        <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
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