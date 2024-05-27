import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodosService } from "../../todos/services/todos.service";
import { CreateTodo, CreateTodoFailure, CreateTodoSuccess, GetTodos, GetTodosFailure, GetTodosSuccess } from "./todos.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { ITodo } from "../../shared/interfaces/todo.interface";
import { IGetAllTodosResponse } from "../../shared/interfaces/get-all-todos.interface";

@Injectable()
export class TodosEffects {
    constructor(private _todosService: TodosService, private actions$: Actions) {}

    getTodos$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(GetTodos),
          switchMap(() => this._todosService.getAllTodos()
            .pipe(
              map((todos: IGetAllTodosResponse) => {
                return GetTodosSuccess({ todos: todos.data });
              }),
              catchError(error => of(GetTodosFailure({ error })))
            )
          )
        )
      });
    
      createTodos$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(CreateTodo),
          switchMap(({ todo }) => this._todosService.createTodo(todo)
            .pipe(
              map((todo: ITodo) => {
                return CreateTodoSuccess({ todo });
              }),
              catchError(error => of(CreateTodoFailure({ error })))
            )
          )
        )
      });

}