export const displayCreateTodoItemsOfCategory = categoryId => {
  console.log("Actions creater DISPLAY_CREATE_TODO_FOR_CATEGORY", {
    categoryId
  });
  return {
    type: "DISPLAY_CREATE_TODO_FOR_CATEGORY",
    payload: categoryId
  };
};

export const displayTodoItemsOfCategory = todoItems => {
  console.log("Actions creater DISPLAY_TODO_FOR_CATEGORY", { todoItems });
  return {
    type: "DISPLAY_TODO_FOR_CATEGORY",
    payload: todoItems
  };
};
