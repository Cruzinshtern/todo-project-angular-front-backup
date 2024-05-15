import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from './shared/services/missing-translation.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TodosEffects } from './store/todos/todos.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todosReducer } from './store/todos/todos.reducer';
import { authInterceptor } from './shared/interceptors/authorization.interceptor';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideToastr(), provideHttpClient(withInterceptors([authInterceptor])), importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
        missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
    })), provideAnimationsAsync(), provideStore({ todos: todosReducer }), provideEffects([TodosEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
