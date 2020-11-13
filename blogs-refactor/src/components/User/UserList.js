import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getAllUsers } from '../../actionCreators/userActionCreators';
import Header from '../Header/Header';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: max-content;
`;

const StyledElement = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledUsername = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
  color: #1a0dab;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledUserBlogs = styled.div`
  text-decoration: underline;
`;
const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 21px;
`;

const UserList = () => {
  const users = useSelector(({ user }) => user.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserDetails = (id) => {
    history.push(`/users/${id}`);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (!users) return null;
  return (
    <>
      <Header text='Users' />
      <StyledList>
        <StyledElement>
          <StyledTitle style={{marginRight: 24}}>Username</StyledTitle>
          <StyledTitle>Blogs</StyledTitle>
        </StyledElement>
        {users.map((user) => (
          <StyledElement key={user.id}>
            <StyledUsername onClick={() => handleUserDetails(user.id)}>
              {user.name}
            </StyledUsername>
            <StyledUserBlogs>{user.blogs.length}</StyledUserBlogs>
          </StyledElement>
        ))}
      </StyledList>
    </>
  );
};

export default UserList;
