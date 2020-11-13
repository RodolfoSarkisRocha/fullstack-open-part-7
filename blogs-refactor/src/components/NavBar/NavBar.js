import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../config/router';
import styled from 'styled-components';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 20px 0 0;
`;

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledMenuItems = styled(Toolbar)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const NavBar = () => {
  const user =
    useSelector(({ user }) => user.currentUser) ||
    localStorage.getItem('loggedBlogappUser');
  if (!user) return null;
  return (
    <AppBar position='sticky'>
      <StyledToolBar disableGutters>
        <StyledMenuItems>
          {router.map((route) => {
            return (
              <StyledLink key={route.label} to={route.path}>
                {route.label}
              </StyledLink>
            );
          })}
        </StyledMenuItems>
        <UserMenu />
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
