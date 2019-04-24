import React, { Component } from "react";
import Header from "./../components/header";
import SideBar from "./../components/sidebar";
import ToDoCategoryListComponent from "./../components/todoCategoryListComponent";
import ToDoListComponent from "../components/todoListComponent";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>This is home page</h1>
        <SideBar />
        <ToDoCategoryListComponent />
        <ToDoListComponent />
      </React.Fragment>
    );
  }
}

export default Homepage;
