import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import updateState from '../reducers/photos';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Body from './body';
import Footer from './footer';

const store = createStore(updateState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />        
      </Provider>
    )
  }
}