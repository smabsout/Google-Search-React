import React, { Fragment }from 'react';
import Navigation from './components/Navigation/index.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { List } from './components/List/index.js';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Saved} />
            <Route exact path='/saved' component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </Fragment>
      </Router>

      <List />
    </div>
  );
}

export default App;
