export const categoriesFetched = todoListCategories => {
  console.log("Actions creater", { todoListCategories });
  return {
    type: "CATEGORIES_LOADED",
    payload: todoListCategories
  };
};

export const categoryClicked = categoryId => {
  console.log("Actions creater", { categoryId });
  return {
    type: "CATEGORY_CLICKED",
    payload: categoryId
  };
};
