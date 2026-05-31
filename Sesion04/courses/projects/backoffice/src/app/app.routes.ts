import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes').then((m) => m.authRoutes),
    },
    {
        path: 'app',
        loadComponent: () =>
            import('./shared/components/container/container').then((m) => m.Container),
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./features/dashboard/dashboard.routes').then((m) => m.routes),
            },
            {
                path: 'user',
                loadChildren: () =>
                    import('./features/user/user.routes').then((m) => m.routes),
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
];
