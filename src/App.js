import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { anotherName, addWish } from './actions/myactions';

function App(props) {

  // const dataConverted = Array.from(props.mywish);
  // console.log('App-dataConverted : ', dataConverted);

  const mywish = props.mywish.map(item => {
    return <h2 key={Math.random()}>{item}</h2>
  })
  console.log('App-mywish : ', mywish);
  console.log('App-props : ', props);
  return (
    <div className="App">
      <div>
        <h1>I am App Component</h1>
        <h1>My Name is : {props.myname}</h1>
        <hr></hr>
        {mywish}
        <hr></hr>
        <button onClick={() => { props.changeName() }}>Change Name</button>
        <button onClick={() => { props.addWish() }}>Add Wish</button>
      </div>
    </div>
  );
}

const mapStoreToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Pass Type and Payload
    changeName: () => { dispatch(anotherName()) },
    addWish: () => { dispatch(addWish()) }
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
