import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <App/>
  </Provider>
  // <div>hello!</div>
);

export default Root;
