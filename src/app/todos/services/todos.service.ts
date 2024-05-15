import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TodosService {

    basicUrl = environment.BASIC_URL;

    constructor(private _httpClient: HttpClient) {}

    getAllTodos(): Observable<any> {
        return this._httpClient.get(this.basicUrl + '/tasks');
    }
}