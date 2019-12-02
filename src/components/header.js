import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="header__logo">
          <img className="header__image" src="https://static.thenounproject.com/png/672804-200.png" />
          <h1 className="header__title">Photon</h1>
        </a>
      </header>
    )
  }
}