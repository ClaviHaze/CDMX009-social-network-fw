import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Profile" exact>
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
