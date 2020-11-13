import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../actionCreators/userActionCreators';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledUserAvatar = styled.div`
  display: flex;
  flexgrow: 1;
  align-items: center;
  padding: 0 5px;
`;
const StyledUserName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedUser = useSelector(({ user }) => user.currentUser);

  const history = useHistory();

  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(userLogout());
    history.push('/login');
  };

  return (
    loggedUser && (
      <StyledUserAvatar>
        <StyledUserName>{loggedUser?.name}</StyledUserName>
        <IconButton
          aria-label='account of current user'
          aria-haspopup='true'
          aria-controls='menu-appbar'
          onClick={handleMenu}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </StyledUserAvatar>
    )
  );
};

export default UserMenu;
