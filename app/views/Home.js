import React from 'react';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button title="Go to Jane's profile" onPress={() => navigate('Redux')} />
    );
  }
}

export default HomeScreen;
