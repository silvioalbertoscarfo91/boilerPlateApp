import React from 'react'
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class ReduxScreen extends React.Component {
  static navigationOptions = {
    title: 'ReduxScreen',
  };

  render() {
    return (
      <>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </>)
  };
}

export default ReduxScreen;
