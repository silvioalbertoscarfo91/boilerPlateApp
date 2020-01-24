import React from 'react';
import {Text, Button} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <Text>
          This is a simple page to try navigation
        </Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigate('Details')}
        />
      </>
    );
  }
}

export default ProfileScreen;
