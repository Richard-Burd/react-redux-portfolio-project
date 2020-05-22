import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import AirframesContainer from './components/AirframesContainer'
import Airframe from './components/Airframe'
import AirframeForm from './components/AirframeForm'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AirframesPage from './components/AirframesPage' // <= This isn't working right now

// used for testing functionality & troubleshooting problems
// import TestPortal from './tests/TestPortal'

// This will test the initial state
// console.log('here is the store.getState()');
// store.subscribe(()=> console.log(store.getState()))

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
            <Route exact path='/new-airframe'
              render={(props) =>
                <AirframeForm {...props}
                  formAction={"create"}
                  name={"Bozo"}
                  weight={5}
                  config={"Flying Wing"}
                  image={"imgur.com"}
                />
              }
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
