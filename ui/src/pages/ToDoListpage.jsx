import React, { Component } from "react";
import DisplayToDoItemInCategory from "./../components/displayToDoItemInCategory";

class ToDoListPage extends Component {
  state = {};

  render() {
    return (
      <React.Component>
        <DisplayToDoItemInCategory />
      </React.Component>
    );
  }
}

export default ToDoListPage;
