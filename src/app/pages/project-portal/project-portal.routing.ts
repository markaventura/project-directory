import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectPortalComponent } from './project-portal.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectPortalComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

