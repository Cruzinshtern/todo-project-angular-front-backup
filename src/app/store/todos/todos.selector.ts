import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll } from "./todos.reducer";
import { ITodo } from "../../shared/interfaces/todo.interface";

export const todosSelector = createFeatureSelector<any>('todos');
export const todosSelectorState = createSelector(todosSelector, (state) => {
  return state;
});

export const selectTodos = createSelector(todosSelectorState, selectAll);