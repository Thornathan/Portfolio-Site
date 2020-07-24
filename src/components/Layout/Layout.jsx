import React, { Component } from "react";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <section class="s1">
          <div class="main-container">
            <h1>Hi, I am Jonathan Lane</h1>
            <p>This is a sentence</p>
            <a href="#">Link</a>
          </div>
        </section>
        <section class="s2">
          <div class="main-container">About</div>
        </section>
        <section class="s1">
          <div class="main-container">Portfolio</div>
        </section>
        <section class="s2">
          <div class="main-container">Contact</div>
        </section>
      </div>
    );
  }
}
