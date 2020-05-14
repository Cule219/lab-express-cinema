import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Container from '@material-ui/core/Container';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container maxWidth="sm">
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
