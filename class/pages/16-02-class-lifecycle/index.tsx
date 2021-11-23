import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from "next/router";

interface IState {
  count: number;
}
export default class LifecyclePage extends Component {
  state: IState = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트");
  }

  componentDidUpdate() {
    console.log("수정");
  }

  componentWillUnmount() {
    console.log("빠이");
  }

  onClickCounter() {
    console.log(this.state.count);
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
        <button onClick={this.onClickMove.bind(this)}>페이지 이동</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
