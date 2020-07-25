import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from '../../components/Layout/Layout'
import ContactPage from '../ContactPage/ContactPage';

class App extends Component {
  /*--- State ---*/
  /*--- Handle Methods ---*/
  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div className="App">
        <header className="App-header">App-Header</header>
        <Layout />
        <main>
          <Switch>
            <Route exact path="/contact" render={() => (
              <ContactPage />
            )}/>
          </Switch>
        </main>
        <script></script>
      </div>
    );
  }
}
export default App;