import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { anotherName } from './actions/myactions';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <div>
        <h1>I am App Component</h1>
        <h1>My Name is : {props.myname}</h1>
        <button onClick={() => { props.changeName() }}>Change Name</button>
      </div>
    </div>
  );
}

const mapStoreToProps = (state) => {
  return {
    myname: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Pass Type and Payload
    changeName: () => { dispatch(anotherName()) }
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
