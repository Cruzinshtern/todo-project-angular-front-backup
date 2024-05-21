import { Component, InputSignal, effect, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { BaseTabViewComponent } from '../../components/base-tab-view/base-tab-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { BoardItemComponent } from '../../components/board-item/board-item.component';

@Component({
  selector: 'board',
  standalone: true,
  imports: [TranslateModule, BoardItemComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();
  todo: ITodo[];
  active: ITodo[];
  done: ITodo[];

  constructor() {
    effect(() => {
      this.todo = this.todos().filter((t: ITodo) => t.status === 1);
      this.active = this.todos().filter((t: ITodo) => t.status === 2);
      this.done = this.todos().filter((t: ITodo) => t.status === 3);
    })
  }
}
