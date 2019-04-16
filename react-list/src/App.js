import React, { Component } from 'react';
import './App.css';
import users from './utils/users';

const usersList = users(50);

class App extends Component {
  render() {
    console.log(usersList);
    return (
      <div className="App">
        <h1>Welcome in users list</h1>
      </div>
    );
  }
}

export default App;
