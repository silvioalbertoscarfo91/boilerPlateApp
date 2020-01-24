import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text}) => (
  <Button
    onPress={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    title={text}
  />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
