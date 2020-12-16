import React, { Component } from "react";
import "./Projects.css";
import Checkers from "../../images/checkers.png";
import BlogSite from "../../images/blog.png";
import TwistsOfRate from "../../images/twistsofrate.png";
import PokemonCreations from "../../images/pokemonCreations.png";
import NetflixClone from "../../images/netflix-clone.png";
import AmazonClone from "../../images/amazon-clone.png";
import RobinhoodClone from "../../images/robinhood-clone.png";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h3>Some of my past projects</h3>
        <div className="posts__container">
          <div className="post__wrapper">
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
          <div className="post__wrapper">
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
                  blogs and others can rate the validity of their posts
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
          <div className="post__wrapper">
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
          <div className="post__wrapper">
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
          <div className="post__wrapper">
            <div className="post">
              <img
                className="thumbnail"
                alt="netflix-clone"
                src={NetflixClone}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">Netflix Clone Front-end UI</h6>
                <p className="post-intro">
                  A Clone of the Netflix UI with an API call to a movie database
                  and also shows trailers for selected shows or movies.
                </p>
                <a
                  href="https://github.com/Thornathan/Netflix-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="post__wrapper">
            <div className="post">
              <img
                className="thumbnail"
                alt="amazon-clone"
                src={AmazonClone}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">Amazon Clone</h6>
                <p className="post-intro">
                  A Clone of Amazon Front-End UI with some back end
                  functionality utilizing firebase. Can process payments using
                  Stripe and handle User Authentication.
                </p>
                <a
                  href="https://github.com/Thornathan/Amazon-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="post__wrapper">
            <div className="post">
              <img
                className="thumbnail"
                alt="robinhood-clone"
                src={RobinhoodClone}
              ></img>
              <div className="post-preview">
                <h6 className="post-title">Robinhood Front-end UI</h6>
                <p className="post-intro">
                  A Mockup of the Robinhood Web Application built using React
                  and FireStore and deployed with Firebase.
                </p>
                <a
                  href="https://github.com/Thornathan/Robinhood-Clone"
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
