import React, { Component, Profiler } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Home from './Components/Home';
import Profile from './Components/Profile';

class App extends Component {
  state = {
    name: "App Name- Mr.Apple"
  }

  changeName(name) {
    this.setState({
      name: name
    })
  };

  render() {
    return (
      <div className="App" >

        <Home handleNameChild={(name) => this.changeName(name)}></Home>
        <Profile name={this.state.name}></Profile>
        <h1>I am from APP : {this.state.name}</h1>

      </div>
    );
  }
}

export default App;
