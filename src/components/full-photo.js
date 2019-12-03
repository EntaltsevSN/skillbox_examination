import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import unsplash from '../unsplash';
import { toJson } from 'unsplash-js';

class FullPhoto extends Component {
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
      <section className="full-photo">
        {this.props.state.lists.map(photo => {
          if(this.props.match.params.id === photo.id) {
            return (
              <section className="full-photo__block">
                <aside className="full-photo__back">
                  <Link to="/" className="full-photo__link">
                    <i class="fas fa-chevron-left" />
                  </Link>
                </aside>
                <article className="full-photo__photo">
                  <header className="full-photo__header">
                    <figure className="full-photo__author">
                      <a className="full-photo__button" href={`${photo.user.links.html}?utm_source=photon&utm_medium=referral`} target="_blank">
                        <img className="full-photo__avatar" src={photo.user.profile_image.medium} />
                      </a>
                      <figcaption className="full-photo__name">
                        {photo.user.name}
                        {(photo.sponsorship !== undefined) && <span className="full-photo__sponsor">Sponsored photo</span> }
                      </figcaption>
                    </figure>
                    <section className="full-photo__options">
                      <a className="full-photo__link full-photo__link--download" href={photo.links.download}>
                        <i className="full-photo__icon fas fa-download" />
                      </a>
                    </section>
                  </header>
                  <figure className="full-photo__figure">
                    <img className="full-photo__image" src={photo.urls.regular} />
                  </figure>
                  <footer className="full-photo__footer">
                    <section className="full-photo__settings">
                      <a 
                        className="full-photo__property full-photo__property--like fas fa-heart"
                        onClick={e => {
                          if(e.target.classList.contains('liked')) {
                            e.target.classList.remove('liked');
                            this.unlikePhoto(photo.id);
                          } else {
                            e.target.classList.add('liked');
                            this.likePhoto(photo.id);
                          }
                        }}
                      />
                      <div className="full-photo__value">{photo.likes}</div>
                    </section>
                    <section className="full-photo__settings">
                      <i className="full-photo__property fas fa-calendar-day" />
                      <div className="full-photo__value">
                      {`
                        ${photo.updated_at.split('-')[2].split('T')[0]}.${photo.updated_at.split('-')[1]}.${photo.updated_at.split('-')[0]}
                      `}    
                      </div>
                    </section>
                  </footer>
                </article>
              </section>
            )
          }
        })}
      </section>
    )
  }
}

export default withRouter(FullPhoto);