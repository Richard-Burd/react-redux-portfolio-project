import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import AirframesContainer from './components/AirframesContainer'
import Navbar from './Navbar'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// used for testing functionality & troubleshooting problems
// import TestPortal from './tests/TestPortal'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          {/* <TestPortal /> */}
          <Navbar />
          <Route exact path='/airframes' render={routerProps => <AirframesContainer {...routerProps} airframes={store.airframes}/>} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
