import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/home"
import Contact from "./components/contact"
import Projects from "./components/projects"
import About from "./components/about"
import BadPage from "./components/badpage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={()=> <Home />} />
          <Route exact path="/Contact" render={() => <Contact />} />
          <Route exact path="/Projects" render={() => <Projects />} />
          <Route exact path="/About" render={() => <About />} />
          <Route path="*" component={BadPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;