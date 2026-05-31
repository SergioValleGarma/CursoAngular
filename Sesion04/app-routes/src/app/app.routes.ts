import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Economics } from './economics/economics';
import { Politics } from './politics/politics';
import { Sports } from './sports/sports';
import { Base } from './base/base';
import { AngelesPost } from './angeles-post/angeles-post';
import { ChicagoNews } from './chicago-news/chicago-news';
import { NewYorkTimes } from './new-york-times/new-york-times';
import { WashingtonPost } from './washington-post/washington-post';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    
    {
        path: 'economics',
        loadComponent: () => import('./economics/economics').then(m => m.Economics)
    },
    {
        path: 'politics',
        component: Politics
    },
    {
        path: 'sports',
        component: Sports
    },
    {
        path: 'magazines',
        children: [
            {
                path: 'angeles',
                loadComponent: () => import('./angeles-post/angeles-post').then(m => m.AngelesPost)
            },
            {
                path: 'chicago',
                component: ChicagoNews
            },
            {
                path: 'new-york',
                component: NewYorkTimes
            },
            {
                path: 'washington',
                component: WashingtonPost
            }
        ]
    },
    {
        path: 'magazines-economics',
        loadChildren: () => import('./magazines-economics/magazines-routes').then(m => m.magazinesRoutes)
    }
];
