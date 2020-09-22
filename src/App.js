import React from 'react';
//import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';
import PeopleNumber from './components/PeopleNumber';
import PlanetNumber from './components/PlanetNumber';
import Home from './components/Home';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="stars">
        <div class="twinkling">
          <div class="clouds">
            <Router>
              <Home path="/" />
              <People path="/people" />
              <Planets path="/planets"/>
              <PeopleNumber path="/people/:number"/>
              <PlanetNumber path="/planets/:number"/>
            </Router>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
