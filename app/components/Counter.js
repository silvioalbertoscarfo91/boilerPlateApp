import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countActions from '../actions/count';
import {changeCount} from "../actions/count";

class Counter extends Component {

  increment = () => {
    const { count, actions } = this.props;
    let newCounter = count;
    newCounter++;
    actions(newCounter);
  };

  decrement = () => {
    const { count, actions } = this.props;
    let newCounter = count;
    newCounter--;
    actions(newCounter);
  };

  render() {
    const { count } = this.props;
    return (
      <>
        <Button
          onPress={() => this.increment()}
          title="Increment"
        />
        <Text
          style={{textAlign: 'center'}}
        >
          {`Counter here: ${count}`}
        </Text>
        <Button
          onPress={() => this.decrement()}
          title="Decrement"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  actions: (payload) => dispatch(changeCount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

