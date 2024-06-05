import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ProjectButtonComponent } from '../../../shared/components/project-button/project-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectIconComponent } from '../../../shared/components/project-icon/project-icon.component';
import { DialogService } from '../../../shared/services/dialog.service';
import { ProjectBaseDialogComponent } from '../../../shared/components/project-base-dialog/project-base-dialog.component';

@Component({
  selector: 'tile-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, TitleCasePipe, DatePipe, ProjectButtonComponent, TranslateModule, MatTooltipModule, ProjectIconComponent],
  templateUrl: './tile-item.component.html',
  styleUrl: './tile-item.component.scss'
})
export class TileItemComponent {
  item: InputSignal<ITodo> = input.required<ITodo>();

  constructor(private _dialogService: DialogService) {}

  openDeleteDialog(event: any): void {
    event.stopPropagation();
    const dialogRef = this._dialogService.openDialog(ProjectBaseDialogComponent, 'delete');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openEditDialog(event: any): void {
    event.stopPropagation();

    const dialogRef = this._dialogService.openDialog(ProjectBaseDialogComponent, 'edit');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
