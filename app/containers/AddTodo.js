import React from 'react';
import { TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
const [value, setValue] = React.useState(0);
  let input;

  return (
    <>
      <TextInput
      onChangeText={(val) => setValue(val.toString())}
      value={value}
      >
      </TextInput>
      <Button
      onPress={()=> dispatch(addTodo(value))}
      title={'ADD'}
      />
    </>
  )
};

export default connect()(AddTodo);
