import React from 'react'
import '../styles/Portfolio.css'
import PortfolioCard from './PortfolioCard'
import { portfolioItems } from '../lib/portfolio-items'

var Portfolio = function () {
  return (
    <div className='main'>
      <ul className='container'>
        {portfolioItems.map((item, key) => {
          return (
            <PortfolioCard
              key={key}
              cardTitle={item.cardTitle}
              cardKeywords={item.cardKeywords}
              cardParagraph={item.cardParagraph}
              cardGithubLink={item.cardGithubLink}
              cardDeployedLink={item.cardDeployedLink}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Portfolio
