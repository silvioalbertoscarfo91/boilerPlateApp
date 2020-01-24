import React from 'react';
import {Text, Button} from 'react-native';

class DetailsScreen extends React.Component {
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
          onPress={() => navigate('Profile')}
        />
      </>
    )
  }
}

export default DetailsScreen;
