import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import ProfileScreen from './ProfileScreen';
import ReduxScreen from './ReduxScreen';
import DetailsScreen from './DetailsScreen';
import Styles from '../styles/Styles';
import Fonts from '../styles/Fonts';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: Styles.headerStyle,
        headerTitleStyle: {...Fonts.headline.bold},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}} />
      <Stack.Screen name="Redux" component={ReduxScreen} options={{title: 'Redux Screen'}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile Screen'}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Details Screen'}} />
    </Stack.Navigator>
  );
}
