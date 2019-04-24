export default () => {
  return {};
};

export function displayCreateTodoItems(state = false, action) {
  switch (action.type) {
    case "DISPLAY_CREATE_TODO_FOR_CATEGORY":
      console.log(
        "DISPLAY_CREATE_TODO_FOR_CATEGORY action caught",
        action.payload
      );
      return action.payload;
    default:
      return false;
  }
}

export function getToDoItemsInACategory(state = [], action) {
  switch (action.type) {
    case "DISPLAY_TODO_FOR_CATEGORY":
      console.log("DISPLAY_TODO_FOR_CATEGORY action caught", action.payload);
      return action.payload;
    default:
      return [];
  }
}
