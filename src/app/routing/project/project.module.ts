import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
