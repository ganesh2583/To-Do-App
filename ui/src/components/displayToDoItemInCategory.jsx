import React, { Component } from "react";
import { getToDoItemsInACategory } from "./../reducers/reducers-todo";
import connect from "react-redux";

class DisplayToDoItemInCategory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>TO DO List: </h1>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    toDoItemsInACategory: state.toDoItemsInACategory
  };
};

export default connect(mapStateToProps)(DisplayToDoItemInCategory);
