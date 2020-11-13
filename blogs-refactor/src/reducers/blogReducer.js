const initialState = {
  blogs: [],
  blogById: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BLOGS': {
      return { ...state, blogs: action.payload };
    }
    case 'GET_BLOG_BY_ID': {
      return { ...state, blogById: action.payload };
    }
    default:
      return state;
  }
};

export default blogReducer;
