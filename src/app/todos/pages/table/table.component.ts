import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { BaseTabViewComponent } from '../../components/base-tab-view/base-tab-view.component';
import { CustomAngularPaginatorComponent, CustomAngularTableComponent } from 'custom-angular-component-lib';

@Component({
  selector: 'table',
  standalone: true,
  imports: [CustomAngularTableComponent, CustomAngularPaginatorComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();
}
