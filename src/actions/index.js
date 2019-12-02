export const setPhotos = (lists) => ({
  type: 'SET_PHOTOS',
  lists
});

export const loadMore = (page) => ({
  type: 'LOAD_MORE',
  page
});

export const likePhoto = (id, likes) => ({
  type: 'LIKE_PHOTO',
  id,
  likes
});

export const unlikePhoto = (id, likes) => ({
  type: 'UNLIKE_PHOTO',
  id,
  likes
});