import React from "react";
import "../portfolio/Portfolio.css";
import GithubLogo from "../../assets/home/github.png";
import VisitSiteLogo from "../../assets/portfolio/visit-link.png";

var PortfolioCard = function (props) {
  return (
    <li className="card">
      <div className="card-body">
        <h4>{props.cardTitle}</h4>
        <br />
        <h6>{props.cardKeywords}</h6>
        <p>{props.cardParagraph}</p>
        <div className="links">
          {props.cardGithubLink && (
            <a href={props.cardGithubLink}>
              <img src={GithubLogo} alt={props.cardGithubLink}></img>
            </a>
          )}
          {props.cardDeployedLink && (
            <a href={props.cardDeployedLink}>
              <img src={VisitSiteLogo} alt={props.cardDeployedLink}></img>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default PortfolioCard;
