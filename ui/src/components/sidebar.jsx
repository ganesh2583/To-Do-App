import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-2" style={{ backgroundColor: "black" }}>
          Side bar
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
