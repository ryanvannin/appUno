import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

render(
  <App url="https://raw.githubusercontent.com/ryanvannin/appUno/create-react-fetch-test/initialdata.json" pollInterval={2000} />,
  document.getElementById('root')
);
