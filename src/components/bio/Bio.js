import React from "react";
import './Bio.css';

var Bio = function () {
    var link = <a href={"https://ceng.metu.edu.tr/course-list"}>METU - Computer Engineering</a>;
    
    return (
        <div className="text">
            <h2>
              <span>Hi!</span>
            </h2>
            <p>
              <br/>
              <span>I'm İlkyaz, a software engineer based in İstanbul, Turkey.</span>
              <br/>
              <span>Recently, I graduated from{link}department.</span>     
              <br/>
              <span>Here are the technologies I enjoy working with:</span>    
            </p>  
            <ul className="bullets">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
            </ul> 
            
        </div>
      );
}

export default Bio;