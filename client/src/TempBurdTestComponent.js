// These dependencies should load if they were installed properly:
import { Link }from 'react-router-dom';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import React, { Component } from 'react'

export default class TempBurdTestComponent extends Component {
  render() {
    return (
      <div>This component is made by Burd and is only a test to verify dependencies were loaded correctly</div>
    )
  }
}
