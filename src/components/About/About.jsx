import React, { Component } from "react";
import "./About.css";
import Pdf from './resume.pdf'

export default class About extends Component {
  render() {
    return <div className="about-wrapper">
      <div className="about-me">
        <h4>More about me</h4>
        <p>I build new projects just to tickle my brain and push my limits as a developer.</p>
        <p>While I do freelance work, I still take interviews in search of a great team & projects that interest me.</p>
      </div>
      <hr />
      <h4>TOP EXPERTISE</h4>
      <p>Full-Stack Developer with primary focus on MongoDb, Express, React, and Node.js:<a href={Pdf} target="_blank">Download Resume</a></p>
      <div className="social-links">

      </div>
    </div>;
  }
}
