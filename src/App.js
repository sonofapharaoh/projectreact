import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router , Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App(){
  return (
    <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
            </li>
            <li><Link to="/about">About</Link>
            </li>
            </ul>
            </nav>
      
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    </Switch>
    </div>
    </Router>


  );
}
export default App;
