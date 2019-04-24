import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getToDoList } from "../services/todoService";
import {
  categoriesFetched,
  categoryClicked
} from "../actions/todoListCategoriesActions";
import { displayCreateTodoItemsOfCategory } from "../actions/todoListActions";

class ToDoCategoryListComponent extends Component {
  componentDidMount() {
    getToDoList()
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response wasn't OK");
        }
      })
      .then(json => {
        console.log("response.json()", json);
        console.log("Props", this.props);
        this.props.categoriesFetched(json);
        return json;
      });
  }

  handleCategoryClicked = categoryId => {
    console.log("handleCategoryClicked", categoryId);
    console.log("handleCategoryClicked Props", this.props);
    this.props.categoryClicked(categoryId);
    this.props.displayCreateTodoItemsOfCategory(true);
  };

  renderList = () => {
    console.log("this.props.toDoCategoriesList", this.props.categoriesLoaded);
    console.log(
      "Array.isArray(this.props.categoriesLoaded)",
      Array.isArray(this.props.categoriesLoaded)
    );
    if (Array.isArray(this.props.categoriesLoaded)) {
      return this.props.categoriesLoaded.map(category => {
        return (
          <button
            type="button"
            className="form-control btn btn-primary col-2"
            id={category.categoryId}
            key={category.categoryId}
            onClick={() => {
              this.handleCategoryClicked(category.categoryId);
            }}
          >
            {category.categoryName}
          </button>
        );
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <div className="row">{this.renderList()}</div>
        </div>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  console.log({ state });
  return {
    categoriesList: state.categoriesList,
    categoryIdClicked: state.categoryClicked,
    categoriesLoaded: state.categoriesLoaded,
    displayCreateTodoItem: state.displayCreateTodoItem
  };
};

let matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      categoriesFetched: categoriesFetched,
      categoryClicked: categoryClicked,
      displayCreateTodoItemsOfCategory: displayCreateTodoItemsOfCategory
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ToDoCategoryListComponent);
