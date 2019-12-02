import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Photo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li 
        className="column column--sm-6 column--md-4 column--lg-3 body__item">
        <Link className="body__link" to={`/photo/${this.props.id}`}>
          <figure className="body__figure">
            <img 
              className={`body__image body__image--${this.props.class()}`} 
              src={this.props.thumb}
            />
            <p className="body__description"></p>
          </figure>
        </Link>
      </li>
    )
  }
}