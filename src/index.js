import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { toJson } from 'unsplash-js';
import unsplash from './unsplash';

import './styles/styles.scss';

class App extends Component {
  constructor() {
    super();

    console.log('Hello World!');
  }

  render() {
    return (
      <div className="layout">
        <header className="header">
          <figure className="header__logo">
            <img className="header__image" src="https://static.thenounproject.com/png/672804-200.png" />
            <h1 className="header__title">Photon</h1>
          </figure>
          <section className="options">
            App options
          </section>
        </header>
        <main role="main" className="body">
          <div className="container body__container">
            <ul className="row body__list">
              {
                /*unsplash.photos.listPhotos(2, 15, "latest")
                .then(toJson)
                .then(json => {
                  console.log(json);
                })*/
              }

              <li className="column column--sm-6 column--md-4 column--lg-3 body__item">
                <a className="body__link" href="#">
                  <figure className="body__figure">
                    <img className="body__image" src="https://via.placeholder.com/300" />
                    <p className="body__description"></p>
                  </figure>
                </a>
              </li>
              <li className="column column--sm-6 column--md-4 column--lg-3 body__item">
                <a className="body__link" href="#">
                  <figure className="body__figure">
                    <img className="body__image" src="https://via.placeholder.com/300" />
                    <p className="body__description"></p>
                  </figure>
                </a>
              </li>
              <li className="column column--sm-6 column--md-4 column--lg-3 body__item">
                <a className="body__link" href="#">
                  <figure className="body__figure">
                    <img className="body__image" src="https://via.placeholder.com/300" />
                    <p className="body__description"></p>
                  </figure>
                </a>
              </li>
              <li className="column column--sm-6 column--md-4 column--lg-3 body__item">
                <a className="body__link" href="#">
                  <figure className="body__figure">
                    <img className="body__image" src="https://via.placeholder.com/300" />
                    <p className="body__description"></p>
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </main>
        <footer className="footer">
          <section className="footer__copyright">
            <p>&copy; 2019. Developed by Entaltsev SN</p>
            <p>Test enviroment for the photo library</p>
          </section>
        </footer>
      </div> 
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)