import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
   MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
  } from '@angular/material';
import { RouterModule } from '@angular/router';
const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    ...materialModules,
  ],
  exports:[
    ...materialModules,
    RouterModule
  ]
})
export class SharedModule { }
