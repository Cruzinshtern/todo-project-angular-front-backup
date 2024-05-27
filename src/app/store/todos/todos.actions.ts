import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../shared/interfaces/todo.interface';

const COMPONENT = 'Todos';

export const GetTodos = createAction(`[${ COMPONENT }] Get Todos`);
export const GetTodosSuccess = createAction(`[${ COMPONENT }] Get Todos Success`, props<{ todos: any[] }>());
export const GetTodosFailure = createAction(`[${ COMPONENT }] Get Todos Failure`, props<{ error: any }>());

export const UpdateTodo = createAction(`[${ COMPONENT }] Update Todos`, props<{ todo: any }>());
export const UpdateTodoSuccess = createAction(`[${ COMPONENT }] Update Todos Success`, props<{ todo: any }>());
export const UpdateTodoFailure = createAction(`[${ COMPONENT }] Update Todos Failure`, props<{ error: any }>());

export const CreateTodo = createAction(`[${ COMPONENT }] Create Task`, props<{ todo: ITodo }>());
export const CreateTodoSuccess = createAction(`[${ COMPONENT }] Create Todos Success`, props<{ todo: ITodo }>());
export const CreateTodoFailure = createAction(`[${ COMPONENT }] Create Todos Failure`, props<{ error: any }>());