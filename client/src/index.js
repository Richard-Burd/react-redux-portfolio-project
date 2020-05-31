import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Test suite fetches astronauts from open API and renders them here in App.js
// ...it uses redux actions & reducers located in './redux/test'
// the './tests' folder contains a series of files that should run if all dependent
// libraries are functioning properly ...  to run the test suite:
// 1.) go into './redux/rootReducer' and un-comment the astronaut
// import TestPortal from './tests/TestPortal'

// import store from './redux/store'
// The commands below will test the initial state, to use them, uncomment the line above
// console.log('here is the store.getState()');
// store.subscribe(()=> console.log(store.getState()))


ReactDOM.render(
  <React.StrictMode>
    {/* <TestPortal /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
