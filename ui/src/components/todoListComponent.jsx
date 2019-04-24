import React, { Component } from "react";
import { createToDoItem } from "./../services/todoService";
import { connect } from "react-redux";

class ToDoListComponent extends Component {
  state = {
    todo: ""
  };

  handleCreateToDoItem = event => {
    console.log("Submit clicked", this.state.todo);
    console.log(
      "Submit clicked categoryIdClicked",
      this.props.categoryIdClicked
    );
    createToDoItem(this.props.categoryIdClicked, {
      toDoItemDesc: this.state.todo,
      isCompleted: false
    });
  };

  handleToDoItemChange = e => {
    this.setState({ todo: e.target.value });
  };

  componentDidMount() {
    console.log("Props for ToDoListComponent", this.props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayCreateTodoItem && (
          <React.Fragment>
            <h1>To Do </h1>
            <div className="form-group col-xs-4">
              <input
                type="text"
                name="todoItem"
                className="form-control col-3"
                placeholder="Enter your to do..."
                onChange={this.handleToDoItemChange}
              />
            </div>
            <div className="form-group col-xs-4">
              <button
                type="button"
                className="form-control btn btn-primary col-1"
                onClick={this.handleCreateToDoItem}
              >
                Add
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  console.log({ state });
  return {
    categoryIdClicked: state.categoryClicked,
    displayCreateTodoItem: state.displayCreateTodoItem
  };
};

export default connect(mapStateToProps)(ToDoListComponent);
