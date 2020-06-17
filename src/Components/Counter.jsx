import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement() {
    //     console.log('incremen clicked', this);
    // }

    handleIncrement = () => {
        console.log('Increment clicked : ', this);
        this.setState({ count: this.setState.count + 1 });
    }
    render() {
        return (
            <React.Fragment>
                <span className={this.GetBadgeClass()}>{this.FormatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment</button>
                <ul>
                    {this.state.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    GetBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    FormatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;