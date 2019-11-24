import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import MyApp from './src/components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    )
  }
}