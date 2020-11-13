const initialState = {
  mesasge: null,
  notificationType: null,
  timerId: null,
  visible: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      if (state.timerId) {
        clearTimeout(state.timerId);
      }
      return {
        ...state,
        message: action.message,
        notificationType: action.notificationType,
        timerId: action.timerId,
        visible: action.visible,
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
