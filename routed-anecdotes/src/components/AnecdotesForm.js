import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AnecdotesContext } from '../App';
import { useField } from '../hooks';

const AnecdoteForm = () => {
  const author = useField('text');
  const content = useField('text');
  const info = useField('text');

  const history = useHistory();

  const anecdotesContext = useContext(AnecdotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    anecdotesContext.addNew({
      content: content.inputProps.value,
      author: author.inputProps.value,
      info: info.inputProps.value,
      votes: 0,
    });
    history.push('/');
    anecdotesContext.handleNotification(content.inputProps.value, 10);
  };

  const resetFields = () => {
    author.helpers.reset();
    content.helpers.reset();
    info.helpers.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.inputProps} name='content' />
        </div>
        <div>
          author
          <input {...author.inputProps} name='author' />
        </div>
        <div>
          url for more info
          <input {...info.inputProps} name='info' />
        </div>
        <button type='submit'>create</button>
      </form>
      <button onClick={resetFields} type='button'>
        reset
      </button>
    </div>
  );
};

export default AnecdoteForm;
