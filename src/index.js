import React from 'react';
import ReactDOM from 'react-dom';
import unsplash, { authenticationUrl } from './unsplash';

import App from './components/app';

import './styles/styles.scss';

const code = location.search.split('code=')[1];

if (code) {
  unsplash.auth.userAuthentication(code)
  .then(res => res.json())
  .then(json => {
    unsplash.auth.setBearerToken(json.access_token);
  });

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
} else {
  location.assign(authenticationUrl);
}