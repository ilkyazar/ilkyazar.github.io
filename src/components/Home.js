import React from 'react'
import '../styles/Home.css'

import HomepageLogo from '../assets/home/ilkyaz-arabaci-logo.png'
import GithubLogo from '../assets/home/github.png'
import GmailLogo from '../assets/home/gmail.png'
import HackerrankLogo from '../assets/home/hackerrank.png'
import LinkedinLogo from '../assets/home/linkedin.png'
import CodepenLogo from '../assets/home/codepen.png'

var Home = function () {
  return (
    <div className='main'>
      <img
        className='homepage-logo'
        src={HomepageLogo}
        alt='İlkyaz Arabacı | Computer Engineer, New Grad'
      ></img>

      <div className='social-links'>
        <a
          href='https://github.com/ilkyazar'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <img src={GithubLogo} alt='github.com/ilkyazar'></img>
        </a>
        <a
          href='https://www.hackerrank.com/ilkyazar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={HackerrankLogo} alt='hackerrank.com/ilkyazar'></img>
        </a>
        <a
          href='https://codepen.io/ilkyazar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={CodepenLogo} alt='codepen.io/ilkyazar'></img>
        </a>
        <a
          href='mailto:ilkyaz.arabaci@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GmailLogo} alt='ilkyaz.arabaci@gmail.com'></img>
        </a>
        <a
          href='https://www.linkedin.com/in/ilkyaz-arabaci/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedinLogo} alt='linkedin.com/in/ilkyazar'></img>
        </a>
      </div>
    </div>
  )
}

export default Home
