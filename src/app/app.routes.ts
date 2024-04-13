import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'works',
        loadChildren: () => import('../../src/app/components/works/works.module').then(m => m.WorksModule),
        data: {
            breadcrumb: 'Works'
        }
    },
];
