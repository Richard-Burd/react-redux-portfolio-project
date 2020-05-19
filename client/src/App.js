import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import AirframesContainer from './components/AirframesContainer'
import Airframe from './components/Airframe'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AirframesPage from './components/AirframesPage' // <= This isn't working right now

// used for testing functionality & troubleshooting problems
// import TestPortal from './tests/TestPortal'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          {/* <TestPortal /> */}
          <Navbar />
          <Switch>
            <Route exact path='/airframes' render={routerProps => <AirframesContainer {...routerProps} />} />
            <Route exact path='/airframes/:airframeId' render={routerProps => <Airframe {...routerProps} />} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
