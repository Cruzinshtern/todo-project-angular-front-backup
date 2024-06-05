import { Component } from '@angular/core';
import { ITodo } from '../shared/interfaces/todo.interface';
import { NavService } from '../shared/services/navigation.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ProjectButtonComponent } from '../shared/components/project-button/project-button.component';
import { DialogService } from '../shared/services/dialog.service';
import { ProjectBaseDialogComponent } from '../shared/components/project-base-dialog/project-base-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { TodosService } from '../todos/services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [DatePipe, TranslateModule, AsyncPipe, ProjectButtonComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  todo$: Observable<ITodo>;

  constructor(private _navService: NavService, private _dialogService: DialogService, private _todosService: TodosService) {
    const id = this._navService.getRouterDetails('id');
    this.todo$ = this._todosService.getOneTodo(id);
  }

  handleDelete() {
    const dialogRef = this._dialogService.openDialog(ProjectBaseDialogComponent, 'delete');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  handleEdit(todo: ITodo) {
    const dialogRef = this._dialogService.openDialog(ProjectBaseDialogComponent, 'edit', todo);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
