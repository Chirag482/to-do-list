import { connect } from "react-redux";
import React, { Component } from "react";

class List extends Component {
  render() {
    const tasks = this.props.state;
    return (
      <div>
        {tasks.map((task) => (
          <ul>
            <li>{task}</li>
          </ul>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(List);
