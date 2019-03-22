import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from '../layout/normal/normal.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { IdentityGuard } from '../core/guard/identity.guard';
import {MemberGuard } from '../core/guard/member.guard';
import { AdminGuard } from '../core/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: NormalComponent,
    canActivate:[IdentityGuard],
    children:[
      {
        path:'project',
        loadChildren:'./project/project.module#ProjectModule'
      },
    
    ]
  },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: '',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
