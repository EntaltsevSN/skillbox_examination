import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import unsplash from '../unsplash';
import { toJson } from 'unsplash-js';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.likePhoto = this.likePhoto.bind(this);
    this.unlikePhoto = this.unlikePhoto.bind(this);
  }

  likePhoto(id) {
    unsplash.photos.likePhoto(id)
    .then(toJson)
    .then(json => {
      this.props.state.likePhoto(json.photo.id, json.photo.likes)
    });
  }

  unlikePhoto(id) {
    unsplash.photos.unlikePhoto(id)
  .then(toJson)
  .then(json => {
    this.props.state.unlikePhoto(json.photo.id, json.photo.likes)
  });
  }

  render() {
    return (
      <section className="modal">
        {this.props.state.lists.map(photo => {
          if(this.props.match.params.id === photo.id) {
            return (
              <article key="modal" className="modal__window">
                <header key="header" className="modal__header">
                  <figure className="modal__author">
                    <a href={`${photo.user.links.html}?utm_source=photon&utm_medium=referral`} target="_blank">
                      <img className="modal__avatar" src={photo.user.profile_image.medium} />
                    </a>
                    <figcaption className="modal__name">
                      {photo.user.name}
                      {(photo.sponsorship !== undefined) && <span className="modal__sponsor">Sponsored photo</span> }
                    </figcaption>
                  </figure>
                  <section className="modal__options">
                    <a className="modal__link" href={photo.links.download}>
                      <i className="modal__icon fas fa-download"></i>
                    </a>
                  </section>
                </header>
                <figure key="photo" className="modal__figure">
                  <img className="modal__image" src={photo.urls.regular} />
                  <figcaption></figcaption>
                </figure>
                <footer key="footer" className="modal__footer">
                <section className="modal__settings">
                    <a 
                      className="modal__icon modal__icon--like fas fa-heart"
                      onClick={e => {
                        if(e.target.classList.contains('liked')) {
                          e.target.classList.remove('liked');
                          this.unlikePhoto(photo.id);
                        } else {
                          e.target.classList.add('liked');
                          this.likePhoto(photo.id);
                        }
                      }}
                    ></a>
                    <div className="modal__likes">{photo.likes}</div>
                  </section>
                  <section className="modal__settings">
                    <i className="modal__icon fas fa-calendar-day"></i>
                    <div className="modal__text">
                    {`
                      ${photo.updated_at.split('-')[2].split('T')[0]}.${photo.updated_at.split('-')[1]}.${photo.updated_at.split('-')[0]}
                    `}    
                    </div>
                  </section>
                </footer>
              </article>
            )
          }
        })}
        <Link to="/" className="modal__overlay"></Link>
      </section>
    )
  }
}

export default withRouter(Modal);