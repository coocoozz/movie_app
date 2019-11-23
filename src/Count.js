/*

import React from 'react';
  
class App extends React.Component {
  // 생성자
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  // 렌더링 후에 호출되는 함수
  componentDidMount() {
    console.log("Component rendered");
  }

  // 업데이트로 인한 렌더링 후에 호출되는 함수
  componentDidUpdate() {
    console.log("Compnent updated");
  }

  // 페이지가 종료될때
  componentWillUnmount() {
    console.log("Bye Bye");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };

  render() {
    console.log("Rendering");

    return (<div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
*/