import React from 'react';

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h3>{anecdote.content}</h3>
      <div>Url for more info: {anecdote.info}</div>
      <div>Has: {anecdote.votes}</div>
    </div>
  );
};

export default Anecdote;
