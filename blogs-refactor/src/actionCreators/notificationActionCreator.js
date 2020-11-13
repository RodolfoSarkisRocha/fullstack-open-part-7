export const setNotification = ({ message, type }) => {  
  return async (dispatch) => {
    const timerId = setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        message,
        notificationType: type,
        visible: false,
      });
    }, 5000);
    dispatch(showNotification(message, type, timerId));
  };
};

const showNotification = (message, type, timerId) => {
  return {
    type: 'SET_NOTIFICATION',
    notificationType: type,
    message,
    timerId,
    visible: true,
  };
};
