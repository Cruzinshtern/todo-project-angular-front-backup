import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { IProjectDialogData } from '../../interfaces/project-dialog-data.interface';
import { ProjectButtonComponent } from '../project-button/project-button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatIconModule, ProjectButtonComponent],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent implements OnInit {
  title: string | null;
  text: string | null;
  confirmBtnText: string | null;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProjectDialogData,
  ) {}

  ngOnInit(): void {
    const { title, text, confirmBtnText } = this.data;
    this.title = title;
    this.text = text;
    this.confirmBtnText = confirmBtnText;
  }

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close('confirm');
  }
}
