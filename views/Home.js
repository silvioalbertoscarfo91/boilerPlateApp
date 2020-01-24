import React from 'react';
import {Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile')}
      />
    );
  }
}

export default HomeScreen;
