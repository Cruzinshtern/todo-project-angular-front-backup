import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodosService } from "../../todos/services/todos.service";
import { GetTodos, GetTodosFailure, GetTodosSuccess } from "./todos.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class TodosEffects {
    constructor(private _todosService: TodosService, private actions$: Actions) {}

    getTodos$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(GetTodos),
          switchMap(() => this._todosService.getAllTodos()
            .pipe(
              map((todos: { data: any, count: number }) => {
                return GetTodosSuccess({ todos: todos.data });
              }),
              catchError(error => of(GetTodosFailure({ error })))
            )
          )
        )
      });

}