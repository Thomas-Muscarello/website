import logo from './logo.svg';
import React from 'react';
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/home"
import Contact from "./components/contact"
import Projects from "./components/projects"
import About from "./components/about"
import BadPage from "./components/badpage"
import Blog from "./components/blog"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" render={()=> <Home />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/blog" render={() => <Blog />} />
          <Route path="*" component={BadPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;