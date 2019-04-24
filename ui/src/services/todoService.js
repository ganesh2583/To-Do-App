import * as env from "../constants/Environment";

export function getToDoList() {
  console.log("env", env.HOSTNAME);
  return fetch(env.HOSTNAME + env.TODO_CATEGORY_LIST);
}

export function createToDoItem(categoryId, data) {
  let todoEndpoint =
    env.HOSTNAME + env.TODO_CATEGORY_LIST + "/" + categoryId + "/items";
  console.log({ todoEndpoint, data });
  return fetch(todoEndpoint, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function getToDoItemListInCategory(categoryId) {
  let todoEndpoint = env.HOSTNAME + env.TODO_ITEM + "/" + categoryId + "/items";
  return fetch(todoEndpoint);
}
