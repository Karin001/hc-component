import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectBomComponent } from './project-bom/project-bom.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectBomComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
