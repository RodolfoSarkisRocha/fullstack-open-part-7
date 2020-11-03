import React from 'react';

const Notification = ({ content, toggle }) => {
  if (toggle) return <h3>A new anecdote {content} created!</h3>;
  return null;
};

export default Notification;
