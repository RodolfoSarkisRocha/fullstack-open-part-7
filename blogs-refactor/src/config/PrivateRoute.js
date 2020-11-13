import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector(({ user }) => user.currentUser) || localStorage.getItem('loggedBlogappUser');

  const getRouteChild = (from) => {
    if (user) return children;
    
    return <Redirect to={{ pathname: '/login', state: { from } }} />;
  };

  return <Route {...rest} render={({ location }) => getRouteChild(location)} />;
};

export default PrivateRoute;
