import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}
class ClassCounterPage extends Component {
  state: IState = {
    count: 0,
  };

  onClickCounter() {
    console.log(this.state.count);
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}

export default ClassCounterPage;
