import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import AirframesContainer from './components/AirframesContainer'
import Airframe from './components/Airframe'
import AirframeForm from './components/AirframeForm'
import ParametersContainer from './components/ParametersContainer'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArrowCircle from './components/ArrowCircle'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/airframes' render={routerProps => <AirframesContainer {...routerProps} />} />
            <Route exact path='/airframes/:airframeId' render={routerProps => <Airframe {...routerProps} />} />
            <Route exact path='/new-airframe'
              render={(props) =>
                <AirframeForm {...props}
                  formAction={"create"}
                  name={"F-14B "}
                  weight={40100}
                  config={"Conventional Tail"}
                  image={"https://www.squadron.com/v/vspfiles/photos/TM61114-3.jpg"}
                />
              }
            />
            <Route exact path='/airframes/:airframeId/params' render={routerProps => <ParametersContainer {...routerProps} />} />
          </Switch>
        </div>
        <ArrowCircle />
      </Provider>
    </Router>
  );
}

export default App;
