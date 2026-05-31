import { Routes } from "@angular/router";
import { SemanaEconomica } from "./semana-economica/semana-economica";
import { HomeMagazines } from "./home-magazines/home-magazines";

export const magazinesRoutes: Routes = [
    {
        path: '',
        //pathMatch: 'full',
        component: HomeMagazines,
        //loadComponent: () => import('./home-magazines/home-magazines').then(m => m.HomeMagazines),
        children:
            [
                {
                    path: 'gestión',
                    loadComponent: () => import('./gestion/gestion').then(m => m.Gestion)
                },
                {
                    path: 'rumbo-económico',
                    loadComponent: () => import('./rumbo-economico/rumbo-economico').then(m => m.RumboEconomico)
                },
                {
                    path: 'semana-económica',
                    component: SemanaEconomica
                }
            ]
    }

    /* {
        path: '',
        redirectTo: 'semana-económica',
        pathMatch: 'full'
    } */

];
