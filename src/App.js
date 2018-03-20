import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items};
  }
  render() {
    let items = this.state.items;
    return (
      <div className="row">
        <Title />
        <Control />
        <Form />
        <List items={items} />
      </div>
    );
  }
}

export default App;
