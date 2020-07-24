import React, { Component } from 'react';
import './App.css';
import Layout from '../../components/Layout/Layout'

class App extends Component {
  /*--- State ---*/
  /*--- Handle Methods ---*/
  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div className="App">
        <header className="App-header">App-Header</header>
        <Layout />
      </div>
    );
  }
}
export default App;