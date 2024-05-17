import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { BaseTabViewComponent } from '../../components/base-tab-view/base-tab-view.component';

@Component({
  selector: 'board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();
}
