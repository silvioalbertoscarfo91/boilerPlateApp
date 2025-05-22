/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {RootStack} from './app/views/RootStackNavigator';
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore';

const AppContainer = createAppContainer(RootStack);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


