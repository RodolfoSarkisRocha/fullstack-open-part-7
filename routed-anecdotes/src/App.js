import React, { useState } from 'react';
import Menu from './components/Menu';
import Routes from './components/Routes';
import Footer from './components/Footer';
import Notification from './components/Notification';

const AnecdotesContext = React.createContext();

const App = () => {
  const [notification, setNotification] = useState({
    content: null,
    toggle: null,
  });
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1',
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2',
    },
  ]);

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const handleNotification = (content, timeout) => {
    setNotification({ content, toggle: true });
    setTimeout(() => {
      setNotification({ content: null, toggle: false });
    }, timeout * 1000);
  };

  const anecdotesContext = {
    vote,
    addNew,
    anecdotes,
    handleNotification,
  };

  return (
    <>
      <AnecdotesContext.Provider value={anecdotesContext}>
        <h1>Software anecdotes</h1>
        <Menu />
        <Notification
          content={notification.content}
          toggle={notification.toggle}
        />
        <Routes />
      </AnecdotesContext.Provider>
      <Footer />
    </>
  );
};

export { AnecdotesContext };
export default App;
