import React, { Component } from "react";
import Greeting from '../Greeting/Greeting';
import Intro from '../Intro/Intro';
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <section className="s1">
          <div className="main-container">
            <Greeting />
            <Intro />
          </div>
        </section>
        <section className="s2">
          <div className="main-container">About</div>
        </section>
        <section className="s1">
          <div className="main-container">Portfolio</div>
        </section>
        <section className="s2">
          <div className="main-container">Contact</div>
        </section>
      </div>
    );
  }
}
