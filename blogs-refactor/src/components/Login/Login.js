import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actionCreators/userActionCreators';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StyledLoginContainer = styled.div`
  background-color: #4a11a6;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledLoginField = styled.div`
  padding 10px 0;
  width: 100%;  
  font-size: 24px;
  text-align: center;
`;

const StyledHeader = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ username, password }, history));
  };

  return (
    <StyledLoginContainer>
      <StyledLoginForm>
        <StyledHeader>Blogs App</StyledHeader>
        <form onSubmit={handleLogin}>
          <StyledLoginField>
            <label htmlFor='username'>Username: </label>
            <input
              id='username'
              value={username}
              type='text'
              name='Username'
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </StyledLoginField>
          <StyledLoginField>
            <label htmlFor='password'>Password: </label>
            <input
              id='password'
              value={password}
              type='password'
              name='Password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </StyledLoginField>
          <StyledLoginField>
            <Button color='inherit' id='login-button' type='submit'>
              Login
            </Button>
          </StyledLoginField>
        </form>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
