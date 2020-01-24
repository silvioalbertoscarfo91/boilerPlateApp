import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
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
