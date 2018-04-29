import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    // if you are using harmony modules ({modules:false})
    render(App);
  });
}
