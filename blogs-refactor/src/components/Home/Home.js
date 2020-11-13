import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledWelcomeMessage = styled.div`
  font-weight: bold;
  font-size: 32px;  
  width: 100%;
  text-align: center;
  margin auto 0;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Header text='Home' />
      <StyledWelcomeMessage>Welcome to the Blogs App!</StyledWelcomeMessage>
    </>
  );
};

export default Home;
