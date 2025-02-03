import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  addFive = () => {
    this.setState(prevState => ({
      count: prevState.count + 5
    }));
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '300px', margin: '0 auto' }}>
        <h2>Counter-Class Component</h2>
        <div style={{ textAlign: 'center' }}>
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.addOne}>Add +1</button>
          <button onClick={this.addFive}>Add +5</button>
        </div>
      </div>
    );
  }
}

export default Counter;
