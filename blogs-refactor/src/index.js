import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

const StyledApp = styled(App)``;

StyledApp.defaultProps = {};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
