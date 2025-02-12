import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { BaseTabViewComponent } from '../../components/base-tab-view/base-tab-view.component';
import { TileItemComponent } from '../../components/tile-item/tile-item.component';
import { NavService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'tiles',
  standalone: true,
  imports: [TileItemComponent],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent implements BaseTabViewComponent {
  todos: InputSignal<ITodo[]> = input.required<ITodo[]>();

  constructor(private _navService: NavService) {}

  async redirectToTodoPage(id: string) {
    await this._navService.redirectToDetails(id);
  }
}
