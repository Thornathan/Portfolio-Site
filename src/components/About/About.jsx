import React, { Component } from "react";
import "./About.css";
import Pdf from "../../images/resume.pdf";
import BlogSite from "../../images/blog.png";
import LinkedIn from '../../images/linkedIn-img.png';
import Checkers from "../../images/checkers.png";
import TwistsOfRate from "../../images/twistsofrate.png";
import PokemonCreations from "../../images/pokemonCreations.png";

export default class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-me">
          <h4>More about me</h4>
          <p>
            I build new projects just to tickle my brain and push my limits as a
            developer.
          </p>
          <p>
            While I do freelance work, I still take interviews in search of a
            great team & projects that interest me.
          </p>
        <hr />
        <h4>TOP EXPERTISE</h4>
        <p>
          Full-Stack Developer with primary focus on MERN Stack:
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </p>
        <div id="skills">
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
          <ul>
            <li>Postgres</li>
            <li>Heroku</li>
            <li>AWS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        </div>
        <div className="social-links">
          <img id="linkedIn_img" src={LinkedIn}></img>
            <h3>Follow me on LinkedIn</h3>
            <a href="https://www.linkedin.com/in/jonathanalane/" target="_blank">LinkedIn</a>
        </div>
      </div>
    );
  }
}
