import logo from './logo.svg';
import React from 'react';
import Navbar from "./components/NavBar/index"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home/home"
import Contact from "./components/Contact/contact"
import Projects from "./components/Projects/projects"
import About from "./components/About/index"
import BadPage from "./components/BadPage/badpage"
import Blog from "./components/Blog/blog"
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