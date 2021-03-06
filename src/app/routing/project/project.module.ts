import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectBomComponent } from './project-bom/project-bom.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddBomComponent } from './add-bom/add-bom.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectBomComponent, AddProjectComponent, AddBomComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
