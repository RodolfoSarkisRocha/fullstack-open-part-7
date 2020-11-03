import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AnecdotesContext } from '../App';

const AnecdoteForm = () => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [info, setInfo] = useState('');

  const history = useHistory();

  const anecdotesContext = useContext(AnecdotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    anecdotesContext.addNew({
      content,
      author,
      info,
      votes: 0,
    });
    history.push('/');
    anecdotesContext.handleNotification(content, 10);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name='info'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
