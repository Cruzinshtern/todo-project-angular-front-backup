import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { Store } from '@ngrx/store';
import { CreateTodo } from '../store/todos/todos.actions';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  constructor(private _store: Store<any>) {}

  handleSubmit(value: any) {
    this._store.dispatch(CreateTodo({ todo: value }))
  }
}
