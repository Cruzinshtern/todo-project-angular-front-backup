import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-routes')
    },
    { path: 'home', title: 'Home', component: HomeComponent },
    
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }, 
];
