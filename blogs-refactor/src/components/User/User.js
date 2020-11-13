import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { getUserById } from '../../actionCreators/userActionCreators';
import Header from '../Header/Header';

const StyledSubTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.userById);
  const userId = useRouteMatch('/users/:id').params.id;

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch]);

  if (!user) return null;
  return (
    <>
      <Header text={user.name} />
      <StyledSubTitle>Blogs</StyledSubTitle>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
