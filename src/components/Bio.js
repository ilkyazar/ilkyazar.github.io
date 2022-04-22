import React from 'react'
import '../styles/Bio.css'

var Bio = function () {
  var cengLink = (
    <a
      target='_blank'
      rel='noopener noreferrer'
      style={{ color: 'rgb(30, 120, 240)' }}
      href={'https://ceng.metu.edu.tr/course-list'}
    >
      METU - Computer Engineering
    </a>
  )
  var adessoLink = (
    <a
      target='_blank'
      rel='noopener noreferrer'
      style={{ color: 'rgb(30, 120, 240)' }}
      href={'https://www.adesso.com.tr/en/index-3.jsp'}
    >
      adesso Turkey,
    </a>
  )

  return (
    <div className='text'>
      <h2>
        <span>Hi!</span>
      </h2>
      <p>
        <br />
        <span>I'm İlkyaz, a software engineer based in İstanbul, Turkey.</span>
        <br />
        <span>
          Currently, I'm working as Junior Frontend Developer at{adessoLink}one
          of the leading IT providers in the German-speaking market.
        </span>
        <br />
        <span>I graduated from{cengLink}department.</span>
        <br />
        <br />
        <span>Here is the technology stack I enjoy working with:</span>
      </p>
      <ul className='bullets'>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>React.js</li>
        <li>Vue.js</li>
        <li>HTML/CSS</li>
        <li>Java</li>
        <li>Spring</li>
        <li>Node.js</li>
        <li>Git</li>
      </ul>
    </div>
  )
}

export default Bio
