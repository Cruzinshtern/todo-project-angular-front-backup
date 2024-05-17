import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';

@Component({
  selector: 'app-base-tab-view',
  standalone: true,
  imports: [],
  templateUrl: './base-tab-view.component.html',
  styleUrl: './base-tab-view.component.scss'
})
export class BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();
}
