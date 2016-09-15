import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

const node = document.getElementById('app');

render((
  <AppContainer errorReporter={({ error }) => { throw error; }}>
    <App />
  </AppContainer>), node);

if (module.hot) {
  module.hot.accept(App, () => {
    render((
      <AppContainer errorReporter={({ error }) => { throw error; }}>
        <App />
      </AppContainer>), node);
  });
}
