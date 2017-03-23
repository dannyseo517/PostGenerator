import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import { createStore } from 'redux'
import mainPanelApp from './reducers'
import { Provider } from 'react-redux'

let store = createStore(mainPanelApp)

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);