import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'project-input',
  standalone: true,
  imports: [],
  templateUrl: './project-input.component.html',
  styleUrl: './project-input.component.scss'
})
export class ProjectInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() _formControl_: AbstractControl;

  handleInputChange(event: any) {
    this._formControl_.patchValue(event.target.value);
  }
}
