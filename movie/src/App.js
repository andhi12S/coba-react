import {BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Intro from './components/Intro.js';
import Trending from './components/Trending.js';
import Superhots from './components/Superhots.js';
import"./style/landingpage.css";
import Login from './components/Login.js';
import Register from './components/Register.js';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Login/>
      </Route>
      <Route path="/register">
      <Register/>
      </Route>
    <div>
    <Route path="/navigationbar">
    <div className='myBG'>
      <NavigationBar/>
      <Intro/>
    </div>
    <div className='trending'>
    <Trending/>
    </div>
    <div className='superhots'>
    <Superhots/>
    </div>
    </Route>
    </div>
    </Switch>
    </BrowserRouter>


    
  );
}

export default App;

