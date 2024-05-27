import { Component, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectInputComponent } from '../../../shared/components/project-input/project-input.component';
import { ProjectButtonComponent } from '../../../shared/components/project-button/project-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProjectInputComponent, ProjectButtonComponent, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  formValue = output<any>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      title: '',
      description: '',
      start_at: ''
    });
  }

  handleSubmit() {
    const formValue = this.form.value;
    this.formValue.emit(formValue);
  }
}
