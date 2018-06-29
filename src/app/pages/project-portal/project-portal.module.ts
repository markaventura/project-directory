import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './project-portal.routing';
import { ProjectPortalComponent } from './project-portal.component';

const MODULE_COMPONENTS = [
  // ProjectPortalComponent,
]

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    ProjectPortalComponent,
    ...MODULE_COMPONENTS
  ],
})

export class ProjectPortalModule {}
