import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { GetTodos, GetTodosFailure, GetTodosSuccess } from "./todos.actions";

//this is necessary since id in my tasks are not 'id' but '_id' and it is necessary to specify that so that entity adapter can iterate through them properly
export function selectId(a: any): string {
    return a._id;
  }
  
export const adapter: EntityAdapter<any> = createEntityAdapter<any>({ selectId });
  
export const initialState = adapter.getInitialState({
    isLoading: true,
    error: false
});

const reducer = createReducer(
    initialState,
    on(GetTodos, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(GetTodosFailure, (state, { error }) => {
        return {
            ...state,
            isLoading: false,
            error: error.message
        }
    }),
    on(GetTodosSuccess, (state, { todos }) => {
      return adapter.setAll(todos, {
        ...state,
        isLoading: false,
      })
      }),
)

export const { selectAll } = adapter.getSelectors()

export function todosReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}