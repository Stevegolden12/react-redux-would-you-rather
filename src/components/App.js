import React, { Component, Fragment } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>Home Testing</div>
    )
  }
}

export default connect()(App)