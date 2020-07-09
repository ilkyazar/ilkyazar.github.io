import React from "react";
import './Home.css';
import HomepageLogo from "../../assets/ilkyaz-logo-homepage.png";

var Home = function () {
    return (
        <div className="main">
            <img className="homepage-logo" src={HomepageLogo}></img>
        </div>
      );
}

export default Home;