import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotos, loadMore, likePhoto, unlikePhoto } from '../actions';
import unsplash from '../unsplash';
import { toJson } from 'unsplash-js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Photo from './photo';
import FullPhoto from './full-photo';

export class Body extends Component {
  constructor(props) {
    super(props);

    this.setPhotosList = this.setPhotosList.bind(this);
    this.setImageSize = this.setImageSize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }  

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      let newPage = this.props.page + 1;
      
      this.props.loadMore(newPage)
      this.setPhotosList(newPage);
    }
  }

  componentDidMount() {
    unsplash.photos.listPhotos(this.props.page, this.props.limit, "latest")
      .then(toJson)
      .then(json => {
        this.props.setPhotos(json);
      });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  setPhotosList(page) {
    unsplash.photos.listPhotos(page, this.props.limit, "latest")
      .then(toJson)
      .then(json => {
        this.props.setPhotos(json);
      });
  }

  setImageSize(el) {
    let width = el.naturalWidth;
    let height = el.naturalHeight;

    if(width > height) {
      return `horizontal`;
    } else {
      return `vertical`;
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => {
          return (
            <main role="main" className="body">
              <div className="container body__container">
                <ul className="row body__list">
                  {this.props.lists.map(photo => {
                    return (
                      <Photo 
                        key={photo.id} 
                        id={photo.id}
                        url={photo.urls.full} 
                        thumb={photo.urls.small} 
                        class={() => {
                          if(photo.width > photo.height) {
                            return `horizontal`;
                          } else {
                            return `vertical`;
                          }
                        }}
                      />
                    )
                  })}
                </ul>
                <div className="body__footer">
                  <button className="body__button btn btn--primary" onClick={e => {
                    e.preventDefault();

                    let newPage = this.props.page + 1;

                    this.props.loadMore(newPage)
                    this.setPhotosList(newPage);
                  }}>Load more</button>
                </div>
              </div>
            </main>
          )
        }}
        />
        <Route exact path="/photo/:id" render={() => <FullPhoto state={this.props} />} /> 
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
    limit: state.limit,
    page: state.page
  }
}

const mapDispatchToProps = {
  setPhotos,
  loadMore,
  likePhoto,
  unlikePhoto
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);