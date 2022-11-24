import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  UNSAFE_componentWillMount() {
    console.log("Component LifeCycle  Will Mount");
  }

  componentDidMount() {
    console.log("Component LifeCycle Did Mount");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    return (
      <div className="col-sm-8">
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component LifeCycle should  Update");
    return true;
  }

  componentWillUpdate() {
    console.log("component Will Update");
  }

  componentDidUpdate() {
    console.log("component Did Update ");
  }
}

export default LifeCycle;
