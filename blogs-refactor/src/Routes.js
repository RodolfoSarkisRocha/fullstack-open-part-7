import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import BlogsList from './components/BlogsList/BlogsList';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import UserList from './components/User/UserList';
import PrivateRoute from './config/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path='/blogs/:id'>
        <Blog />
      </Route>
      <Route path='/users/:id'>
        <User />
      </Route>
      <Route path='/users'>
        <UserList />
      </Route>
      <PrivateRoute path='/blogs'>
        <BlogsList />
      </PrivateRoute>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/'>
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
