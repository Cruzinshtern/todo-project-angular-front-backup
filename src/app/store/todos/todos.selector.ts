import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll } from "./todos.reducer";

export const todosSelector = createFeatureSelector<any>('todos');
export const todosSelectorState = createSelector(todosSelector, (state) => {
  return state;
});

export const selectTodos = createSelector(todosSelectorState, selectAll);