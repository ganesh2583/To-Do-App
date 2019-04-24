const initialState = {
  categoriesLoaded: [],
  categoryIdClicked: ""
};

export function categoriesLoaded(state = initialState, action) {
  switch (action.type) {
    case "CATEGORIES_LOADED":
      console.log("CATEGORIES_LOADED action caught", action.payload);
      return action.payload;
    default:
      console.log("default action caught for categoriesLoaded");
      return state;
  }
}

export function categoryClicked(state = initialState, action) {
  switch (action.type) {
    case "CATEGORY_CLICKED":
      console.log("CATEGORY_CLICKED action caught", action.payload);
      return action.payload;
    default:
      console.log("default action caught categoryClicked");
      return state;
  }
}
