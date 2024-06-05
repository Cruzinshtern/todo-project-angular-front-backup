import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

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
        path: 'todo-form', 
        title: 'TodoForm', 
        component: TodoFormComponent, 
        canActivate: [AuthGuard] 
    },      
    { 
        path: 'todos', 
        title: 'Todos', 
        component: TodosComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'todo-page', 
        title: 'TodoPage', 
        component: TodoPageComponent, 
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
