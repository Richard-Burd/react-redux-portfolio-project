import React from 'react';
import './App.scss';
import { Provider } from 'react-redux'
import store from './redux/store'
import AirframesContainer from './components/AirframesContainer'
import Airframe from './components/Airframe'
import AirframeForm from './components/AirframeForm'
import ParametersContainer from './components/ParametersContainer'
import HomePage from './components/HomePage'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' render={()=> <HomePage />} />
            <Route exact path='/airframes' render={routerProps => <AirframesContainer {...routerProps} />} />
            <Route exact path='/airframes/:airframeId' render={routerProps => <Airframe {...routerProps} />} />
            <Route exact path='/new-airframe'
              render={(props) =>
                <AirframeForm {...props}
                  formAction={"create"}
                  name={"New Airframe Name Here"}
                  weight={"enter weight here"}
                  config={"Conventional Tail"}
                  image={"https://th.bing.com/th/id/OIP.sVo68GHf6MsLbtdAimNnogHaE8?pid=Api&rs=1.jpg"}
                />
              }
            />
            <Route exact path='/airframes/:airframeId/params' render={routerProps => <ParametersContainer {...routerProps} />} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
