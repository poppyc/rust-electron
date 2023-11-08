import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.png';
import './App.global.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="400px" alt="icon" src={icon} />
      </div>
      <h1>electron-meets-rust-webassembly</h1>
    </div>
  );
};

export default function App() {
  import('./simple-webassembly/pkg/simple_webassembly')
    .then((module) => module.greet())
    .catch((error) => {
      console.error(error);
    });

  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
