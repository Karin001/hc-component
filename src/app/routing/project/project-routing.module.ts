import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectBomComponent } from './project-bom/project-bom.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {path:'',redirectTo:'projectlist',pathMatch:'full'},
  {path:'projectlist',component:ProjectListComponent},
  {path:'projectbom/:id',component:ProjectBomComponent},
  {path:'new',component:AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
