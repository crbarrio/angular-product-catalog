import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout'),
        children: [
            {
                path: 'products/:id',
                loadComponent: () => import('./pages/game-details/game-details')
            },
            {
                path: 'products',
                loadComponent: () => import('./pages/game-list/game-list')
            },
            
            {
                path: '**',
                redirectTo: 'products'
            }
        ]
    }
];
