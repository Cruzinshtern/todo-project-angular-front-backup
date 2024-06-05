import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable } from "rxjs";
import { ITodo } from "../../shared/interfaces/todo.interface";
import { IGetAllTodosResponse } from "../../shared/interfaces/get-all-todos.interface";

@Injectable({ providedIn: 'root' })
export class TodosService {

    basicUrl = environment.BASIC_URL;

    constructor(private _httpClient: HttpClient) {}

    getAllTodos(): Observable<IGetAllTodosResponse> {
        return this._httpClient.get<IGetAllTodosResponse>(this.basicUrl + '/tasks');
    }

    createTodo(todo: ITodo): Observable<ITodo> {
        return this._httpClient.post<ITodo>(this.basicUrl + '/tasks/create', todo);
    }

    getOneTodo(id: string): Observable<ITodo> {
        return this._httpClient.get<ITodo>(this.basicUrl + `/tasks/${id}`);
    }
}