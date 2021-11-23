import React from "react";
import './Portfolio.css';
import PortfolioCard from "../portfolio-card/PortfolioCard";

var Portfolio = function () {
    return (
        <div className="main">
            <ul className="container">
                <PortfolioCard
                    cardTitle="Menrva"
                    cardKeywords="Vue, Django"
                    cardParagraph="A music analysis engine that can listen and evaluate the user playing an instrument."
                    cardDeployedLink="http://senior.ceng.metu.edu.tr/2020/menrva/"
                />
                <PortfolioCard
                    cardTitle="Random Quote Machine"
                    cardKeywords="React"
                    cardParagraph="An application that you can view and tweet random quotes."
                    cardGithubLink="https://github.com/ilkyazar/Random-Quote-Machine"
                    cardDeployedLink="https://codepen.io/ilkyazar/full/MWePPJy"
                />
                <PortfolioCard
                    cardTitle="Noteration"
                    cardKeywords="React"
                    cardParagraph="A notebook application that you can create and share your personal notes."
                    cardGithubLink="https://github.com/eteration-bootcamp/2020-bootcamp-team-5"
                />
                <PortfolioCard
                    cardTitle="Alien Shooter Game"
                    cardKeywords="JavaFX, Spring Boot, MariaDB, Apache Tomcat"
                    cardParagraph="An interactive multiplayer game where user should damage the aliens in order to pass the level."
                    cardGithubLink="https://github.com/ilkyazar/alien-shooter-game"
                />
                <PortfolioCard
                    cardTitle="Hadoop MapReduce"
                    cardKeywords="Java"
                    cardParagraph="A MapReduce application that analyzes the input files consisting of student grades on various courses."
                    cardGithubLink="https://github.com/ilkyazar/hadoop-mapreduce"
                />
                <PortfolioCard
                    cardTitle="Multithreaded Elevator"
                    cardKeywords="C++"
                    cardParagraph="A monitor implementation to simulate person threads which send asynchronous requests and have different priorities."
                    cardGithubLink="https://github.com/ilkyazar/metu-ceng/tree/master/ceng334/hw2"
                />
                <PortfolioCard
                    cardTitle="Trip Planner"
                    cardKeywords="React"
                    cardParagraph="A trip planner application that creates 3 possible plans with the selected cities and budget."
                    cardGithubLink="https://github.com/ilkyazar/react-trip-planner"
                />
                <PortfolioCard
                    cardTitle="Invention Gallery"
                    cardKeywords="JavaScript, HTML/CSS"
                    cardParagraph="A gallery with you can exhibit, drop and rate inventions."
                    cardGithubLink="https://github.com/ilkyazar/invention-gallery"
                />
                <PortfolioCard
                    cardTitle="Ispark Info"
                    cardKeywords="React, Node.js, Express, Heroku"
                    cardParagraph="An application monitoring capacity and location of car parks in Istanbul."
                    cardGithubLink="https://github.com/ilkyazar/react-carpark-info"
                    cardDeployedLink="https://ispark-carpark-info.herokuapp.com/"
                />
                <PortfolioCard
                    cardTitle="Weather App"
                    cardKeywords="React, OpenWeatherMap API"
                    cardParagraph="A weather application that shows the temperature, humidity and wind."
                    cardGithubLink="https://github.com/ilkyazar/react-weather-app"
                    cardDeployedLink="https://ilkyazar.github.io/react-weather-app/"
                />
        </ul>
      </div>
  
    );
}

export default Portfolio;