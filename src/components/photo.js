import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Photo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li 
        className="column column--xs-6 column--sm-4 column--md-3 body__item">
        <Link className="body__link" to={`/photo/${this.props.id}`}>
          <figure className="body__figure">
            <img 
              className={`body__image body__image--${this.props.class()}`} 
              src={this.props.thumb}
            />
          </figure>
        </Link>
      </li>
    )
  }
}