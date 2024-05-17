import { Component, InputSignal, input } from '@angular/core';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ProjectButtonComponent } from '../../../shared/components/project-button/project-button.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../../shared/components/project-dialog/project-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'tile-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, TitleCasePipe, DatePipe, ProjectButtonComponent, TranslateModule, MatTooltipModule],
  templateUrl: './tile-item.component.html',
  styleUrl: './tile-item.component.scss'
})
export class TileItemComponent {
  item: InputSignal<ITodo> = input.required<ITodo>();

  constructor(private _dialog: MatDialog, private _traslateService: TranslateService) {}

  openDialog(action: 'edit' | 'delete'): void {
    let data = {};
    if (action === 'edit') {
      data = { 
        title: this._traslateService.instant('dialog.edit'), 
        text: null, 
        confirmBtnText: this._traslateService.instant('dialog.edit') 
      }
    }
    if (action === 'delete') {
      data = { 
        title: this._traslateService.instant('dialog.deleteModal.title'), 
        text: this._traslateService.instant('dialog.deleteModal.text'), 
        confirmBtnText: this._traslateService.instant('dialog.deleteModal.confirmBtnText') 
      };
    }      

    const dialogRef = this._dialog.open(ProjectDialogComponent, { data });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
