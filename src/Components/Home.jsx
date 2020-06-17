import React, { Component } from 'react';

class Home extends Component {
    state = {
        homeName: "Home Name- Chandan"
    }

    render() {
        return (
            <div>
                <hr></hr>
                <h1>Home Page - Name : {this.state.homeName}</h1>
                <button onClick={() => this.props.handleNameChild(this.state.homeName)}>Change Name</button>
                <hr></hr>
            </div>
        );
    }
}

export default Home;