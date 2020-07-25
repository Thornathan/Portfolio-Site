import React, { Component } from "react";
import "./Projects.css";
import Checkers from "../../images/checkers.png";
import BlogSite from "../../images/blog.png";
import TwistsOfRate from "../../images/twistsofrate.png";
import PokemonCreations from "../../images/pokemonCreations.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h3>Some of my past projects</h3>
        <div className="post-wrapper">
          <div>
            <div className="post">
              <img className="thumbnail" alt="checkers" src={Checkers}></img>
              <div className="post-preview">
                <h6 className="post-title">Checkers</h6>
                <p className="post-intro">
                  A Classic! Traditional checkers game with a white and black
                  marble finish
                </p>
                <a
                  href="https://github.com/Thornathan/Checkers-Project-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="post">
              <img
                className="thumbnail"
                alt="dark-game-secrets"
                src={BlogSite}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">Dark Game Secrets</h6>
                <p className="post-intro">
                  Gaming blog site that allows users to share game secrets in
                  blogs and others can rate the validity of their posts.
                </p>
                <a
                  href="https://github.com/Thornathan/Dark-Game-Secrets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="post">
              <img
                className="thumbnail"
                alt="twistsofrate"
                src={TwistsOfRate}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">TwistsOfRate</h6>
                <p className="post-intro">
                  Gaming site with detailed information about games, genres,
                  consoles and the ability for users to blog about their
                  favorite games
                </p>
                <a
                  href="https://github.com/Thornathan/TwistsOfRate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="post">
              <img
                className="thumbnail"
                alt="pokemon-creations"
                src={PokemonCreations}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">Pokemon Creation App</h6>
                <p className="post-intro">
                  An App designed for users to be able to create new types of
                  pokemon ideas and also has a built in pokedex of the original
                  151 pokemon
                </p>
                <a
                  href="https://github.com/Thornathan/pokemon-creations-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
