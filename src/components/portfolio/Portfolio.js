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
                        <h6>React, OpenWeatherMap API</h6>
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
                        <h4>Ispark Info
                        </h4>
                        <br/>
                        <h6>React, Node.js, Express, IBB Acik Veri Portali API, Heroku</h6>
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
                        <h6>Vue, Django</h6>
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
                        <h4>Alien Shooter Game      
                        </h4>
                        <br/>
                        <h6>JavaFX, Spring Boot, MariaDB, Apache Tomcat</h6>
                        <p>
                        An interactive multiplayer game where user should damage the aliens in order to pass the level.
                        </p>   
                        <div className="links">
                            <a href="https://github.com/ilkyazar/alien-shooter-game"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/alien-shooter-game"></img></a>
                        </div>         
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>Hadoop MapReduce
                        </h4>
                        <br/>
                        <h6>Java</h6>
                        <p>
                        A MapReduce application that analyzes the input files consisting of student grades on various courses.
                        </p>   
                        <div className="links">
                            <a href="https://github.com/ilkyazar/hadoop-mapreduce"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/hadoop-mapreduce"></img></a>
                        </div>         
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>Multithreaded Elevator
                        </h4>
                        <br/>
                        <h6>C++</h6>
                        <p>
                        A monitor implementation to simulate person threads which send asynchronous requests and have different priorities.
                        </p>   
                        <div className="links">
                            <a href="https://github.com/ilkyazar/multithreaded-elevator"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/multithreaded-elevator"></img></a>
                        </div>         
                    </div>
                </li>

                <li className="card">
                    <div className="card-body">
                        <h4>Invention Gallery
                        </h4>
                        <br/>
                        <h6>JavaScript, HTML/CSS</h6>
                        <p>
                        A gallery with you can exhibit, drop and rate inventions.
                        </p>   
                        <div className="links">
                            <a href="https://github.com/ilkyazar/invention-gallery"
                            ><img src={GithubLogo} alt="github.com/ilkyazar/invention-gallery"></img></a>
                        </div>         
                    </div>
                </li>

        </ul>
      </div>
  
    );
}

export default Portfolio;