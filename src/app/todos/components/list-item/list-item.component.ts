import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { ProjectIconComponent } from '../../../shared/components/project-icon/project-icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [ProjectIconComponent, TranslateModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  todo: InputSignal<ITodo> = input.required<ITodo>();
}
