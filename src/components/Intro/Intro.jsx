import React, { Component } from "react";
import "./Intro.css";



export default class Intro extends Component {

  render() {
    return (
      <div className="intro-wrapper">
        <div className="nav-wrapper">
          <div className="dots-wrapper">
            <div className="browser-dot" id="dot-1"></div>
            <div className="browser-dot" id="dot-2"></div>
            <div className="browser-dot" id="dot-3"></div>
          </div>
          <ul id="navigation">
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="left-column">
          <img
            id="profile_pic"
            alt="headshot"
            src="https://i.imgur.com/eecmM6k.jpg"
          ></img>
          <h5>Personalize Theme</h5>
          <div id="theme-options-wrapper">
            <div
              id="light-mode"
              className="theme-dot"
              onClick={() => {
                this.props.handleThemeChange("light");
              }}
            ></div>
            <div
              id="blue-mode"
              className="theme-dot sampleName"
              onClick={() => {
                this.props.handleThemeChange("blue");
              }}
            ></div>
            <div
              id="green-mode"
              className="theme-dot"
              onClick={() => {
                this.props.handleThemeChange("green");
              }}
            ></div>
            <div
              id="purple-mode"
              className="theme-dot"
              onClick={() => {
                this.props.handleThemeChange("purple");
              }}
            ></div>
          </div>
        </div>
        <div className="right-column">
          <div id="preview-shadow">
            <div id="preview">
              <div id="corner-tl" className="corner"></div>
              <div id="corner-tr" className="corner"></div>
              <h3>What I do</h3>
              <p>
                I am a full-stack developer with a passion for designing modern
                highly responsive web-based user interfaces.
              </p>
              <div id="corner-br" className="corner"></div>
              <div id="corner-bl" className="corner"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
