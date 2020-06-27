import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import axios from 'axios';
import GithubState from './components/context/github/githubState';
import AlertState from './components/context/alert/alertState';
import './App.css';
const App = (props) => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar icon='fab fa-github' title=' Github Finder' />
            <div className='container'>
              {<Alert />}
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
