import React, { useContext } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AnecdotesContext } from '../App';
import About from './About';
import Anecdote from './Anecdote';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdotesForm';

const Routes = () => {
  const anecdoteContext = useContext(AnecdotesContext);
  const anecdotes = anecdoteContext.anecdotes;

  const match = useRouteMatch('/anecdote/:id');
  const anecdote = match
    ? anecdotes.find((anecdote) => {
        return anecdote.id === match.params.id;
      })
    : null;

  console.log(anecdote);

  return (
    <Switch>
      <Route path='/create'>
        <AnecdoteForm />
      </Route>
      <Route path='/anecdote/:id'>
        <Anecdote anecdote={anecdote} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <AnecdoteList />
      </Route>
    </Switch>
  );
};

export default Routes;
