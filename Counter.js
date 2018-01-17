import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        Count:
        {count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
