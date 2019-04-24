import { combineReducers } from "redux";
import {
  displayCreateTodoItems,
  getToDoItemsInACategory
} from "./reducers-todo";
import { categoriesLoaded, categoryClicked } from "./reducers-todo-category";

export const allReducers = combineReducers({
  displayCreateTodoItem: displayCreateTodoItems,
  categoriesLoaded: categoriesLoaded,
  categoryClicked: categoryClicked,
  toDoItemsInACategory: getToDoItemsInACategory
});
