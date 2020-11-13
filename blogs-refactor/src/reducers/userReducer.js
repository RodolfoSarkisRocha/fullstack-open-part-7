const initialState = {
  currentUser: null,
  users: [],
  userById: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS': {
      return { ...state, users: action.payload };
    }
    case 'GET_USER_BY_ID': {
      return { ...state, userById: action.payload };
    }
    case 'SET_CURRENT_USER': {
      return { ...state, currentUser: action.user };
    }
    default:
      return state;
  }
};

export default userReducer;
