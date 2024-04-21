import { initialstate } from "./initialstate";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";


export const todoReducer = ( todos = initialstate, action) => {
    switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];

    case DELETE_TODO:
      return todos.filter((e) => e.id !== action.payload.id);

    case UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

    default:
      return todos;
  }  
}