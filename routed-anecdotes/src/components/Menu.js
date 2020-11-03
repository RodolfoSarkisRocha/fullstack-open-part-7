import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const routeStyle = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to='/' style={routeStyle}>
        Anecdotes
      </Link>
      <Link to='/create' style={routeStyle}>
        Create Anecdote
      </Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Menu;
