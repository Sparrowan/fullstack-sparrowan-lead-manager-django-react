import React, { Component, Fragment } from 'react'
import './App.css';

import Header from './Components/layout/Header.js'
import Dashboard from './Components/leads/Dashboard.js'

import { Provider  } from "react-redux";
import store from './store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard /> 
        </div>
      </Fragment>
    </Provider>
    )
  }
}

export default App
