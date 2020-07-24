import React, { Component } from "react";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <section className="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Hi, I am Jonathan Lane</h1>
            </div>

            <div className="intro-wrapper">
              <div className="nav-wrapper">Nav</div>
              <div className="left-column">left-column</div>
              <div className="right-column">right-column</div>
            </div>
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
