import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './shared/services/language.service';
import { AuthGuard } from './shared/guards/auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  providers: [AuthGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'todo-project-angular-front';

  constructor (private _languageService: LanguageService) {}

  ngOnInit(): void {
    this._languageService.getLanguage();
  }
}
