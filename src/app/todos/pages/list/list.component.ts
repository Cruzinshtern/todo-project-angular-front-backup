import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { BaseTabViewComponent } from '../../components/base-tab-view/base-tab-view.component';
import { ListItemComponent } from "../../components/list-item/list-item.component";

@Component({
    selector: 'list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
    imports: [ListItemComponent]
})
export class ListComponent implements BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();
}
