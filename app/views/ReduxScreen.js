import React from 'react'
import Counter from '../components/Counter';

class ReduxScreen extends React.Component {
  static navigationOptions = {
    title: 'ReduxScreen',
  };

  render() {
    return (
      <>
        <Counter/>
      </>)
  };
}

export default ReduxScreen;
