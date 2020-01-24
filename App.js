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
import {createStore} from 'redux'
import rootReducer from './app/reducers/index'

const AppContainer = createAppContainer(RootStack);
const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


