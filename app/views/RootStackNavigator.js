import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import ProfileScreen from './ProfileScreen';
import ReduxScreen from './ReduxScreen';
import DetailsScreen from './DetailsScreen';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Redux: ReduxScreen,
    Profile: ProfileScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: true,
    },
  },
);
