import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnecdotesContext } from '../App';

const AnecdoteList = () => {
  const anecdotesContext = useContext(AnecdotesContext);
  const anecdotes = anecdotesContext.anecdotes;

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
