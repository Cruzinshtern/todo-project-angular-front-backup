import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./auth/auth.component').then(c => c.AuthComponent),
        loadChildren: () => import('./auth/auth-routes')
    },
    { 
        path: 'home', 
        title: 'Home', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
    },    
    { 
        path: 'list', 
        title: 'List', 
        component: ListComponent, 
        canActivate: [AuthGuard] 
    },  
    { 
        path: '',   
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }, 
];
