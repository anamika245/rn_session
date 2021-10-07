import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/page/home';

import store from './src/store/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
