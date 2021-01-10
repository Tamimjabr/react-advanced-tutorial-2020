import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  // * exact(only exact matching) is very important because otherwise we will have the home page in all our components
  return(
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/people'>
        <People></People>
      </Route>
      <Route path='/person/:id' children={<Person></Person>}></Route>
      <Route path='*'>
        <Error></Error>
      </Route>
      </Switch>
    </Router>
  )
};

export default ReactRouterSetup;
