import React from "react";
import './Portfolio.css';
import GithubLogo from "../../assets/home/github.png";
import VisitSiteLogo from "../../assets/portfolio/visit-link.png";

var Portfolio = function () {
    return (
        <div className="main">
            <ul className="container">

                <li className="card">
                    <div className="card-body">
                        <h4>
                        Weather App
                        </h4>
                        <br/>
                        <p>
                        A weather application that shows the temperature, humidity and wind.
                        </p>
                        <div className="links">
                            <a href="https://github.com/ilkyazar/react-weather-app"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/react-weather-app"></img></a>
                            <a href="https://ilkyazar.github.io/react-weather-app/"
                            ><img src={VisitSiteLogo} alt="ilkyazar.github.io/react-weather-app/"></img></a>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>Ispark Info</h4>
                        <br/>
                        <p>
                        An application monitoring capacity and location of car parks in Istanbul.
                        </p>
                        <div className="links">
                            <a href="https://github.com/ilkyazar/react-carpark-info"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/react-carpark-info"></img></a>
                            <a href="https://ispark-carpark-info.herokuapp.com/"
                            ><img src={VisitSiteLogo} alt="ispark-carpark-info.herokuapp.com/"></img></a>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>
                        Menrva
                        </h4>
                        <br/>
                        <p>
                        A music analysis engine that can listen and evaluate the user playing an instrument.
                        </p>
                        <div className="links">
                            <a href="http://senior.ceng.metu.edu.tr/2020/menrva/"
                            ><img src={VisitSiteLogo} alt="senior.ceng.metu.edu.tr/2020/menrva/"></img></a>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>Alien Shooter Game</h4>
                        <p>
                        <br/>
                        An interactive multiplayer game where user should damage the aliens in order to pass the level.
                        </p>   
                        <div className="links">
                            <a href="https://github.com/ilkyazar/alien-shooter-game"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/alien-shooter-game"></img></a>
                        </div>         
                    </div>
                </li>

        </ul>
      </div>
  
    );
}

export default Portfolio;