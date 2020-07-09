import React from "react";
import './Home.css';

import HomepageLogo from "../../assets/ilkyaz-title-homepage.png";
import GithubLogo from "../../assets/github.png";
import GmailLogo from "../../assets/gmail.png";
import HackerrankLogo from "../../assets/hackerrank.png";
import LinkedinLogo from "../../assets/linkedin.png";

var Home = function () {
    return (
        <div className="main">
            <img className="homepage-logo" src={HomepageLogo} alt="İlkyaz Arabacı | Computer Engineer, New Grad"></img>

            <div className="social-links">
                <a href="https://github.com/ilkyazar"
                  > <img src={GithubLogo} alt="github.com/ilkyazar"></img></a>
                <a href="mailto:ilkyaz.arabaci@gmail.com"
                  ><img src={GmailLogo} alt="github.com/ilkyazar"></img></a>
                <a href="https://www.hackerrank.com/ilkyazar"
                  ><img src={HackerrankLogo} alt="github.com/ilkyazar"></img></a>                                                                                            
                <a href="https://www.linkedin.com/in/ilkyaz-arabaci/"
                  ><img src={LinkedinLogo} alt="github.com/ilkyazar"></img></a>
            </div>

        </div>
      );
}

export default Home;