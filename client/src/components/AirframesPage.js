// This is inactive and not working 
/*
import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store'
import AirframesContainer from './AirframesContainer'
import Airframe from './Airframe'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function AirframesPage() {
  return (
    <Router>
      <Provider store={store}>
        <div className="Airframes-Page">
          <Switch>
            <Route exact path='/airframes' render={routerProps => <AirframesContainer {...routerProps} />} />
            <Route exact path='/airframes/:airframeId' render={routerProps => <Airframe {...routerProps} />} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default AirframesPage;
*/









// This is inactive and not working
/*
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import AirframesContainer from './AirframesContainer'
import AirframeShow from './AirframeShow'
import store from '../redux/store'

const AirframesPage = ({ match, airframes }) => (
  <div>
    <AirframesContainer airframes={store.airframe} />
    <Route exact path={match.url} render={() => <h3>Choose an Airframe from the list above</h3>} />
    <Route path={`${match.url}/:airframeId`} render={routerProps => <AirframeShow {...routerProps} airframes={store.airframe} /> }/>
  </div>
)

export default AirframesPage
*/
