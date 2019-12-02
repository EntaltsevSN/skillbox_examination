import initialState from '../state';

export const updateState = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PHOTOS':
        return { 
          ...state,
          lists: [...state.lists, ...action.lists]
      }
    case 'LOAD_MORE':
      return {
        ...state,        
        page: action.page
      }
      
    case 'LIKE_PHOTO':  
      return {
        ...state,
        lists: state.lists.map(photo => (photo.id === action.id) ? {
          ...photo,
          id: action.id,
          likes: action.likes
        } : photo)
      }

    case 'UNLIKE_PHOTO':
      return {
        ...state,
        lists: state.lists.map(photo => (photo.id === action.id) ? {
          ...photo,
          id: action.id,
          likes: action.likes
        } : photo)
      }

    default:
      return state;
  }
}

export default updateState;