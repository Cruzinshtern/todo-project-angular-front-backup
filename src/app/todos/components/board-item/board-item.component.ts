import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';

@Component({
  selector: 'board-item',
  standalone: true,
  imports: [],
  templateUrl: './board-item.component.html',
  styleUrl: './board-item.component.scss'
})
export class BoardItemComponent {
  todo: InputSignal<ITodo> = input.required<ITodo>();

}
