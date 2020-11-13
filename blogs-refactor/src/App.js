import React, { useEffect } from 'react';
import Notification from './components/Notification/Notification';
import Routes from './Routes';
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './actionCreators/userActionCreators';
import { StyledContainer, StyledContent } from './styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setCurrentUser(user));
      localStorage.setItem('userToken', user.token);
    }
  }, []);

  return (
    <>
      <StyledContent>
        <NavBar />
        <StyledContainer>
          <Notification />
          <Routes />
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default App;
