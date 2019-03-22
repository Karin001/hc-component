import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
   MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule
  } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DataTableModule } from './data-table/data-table.module';
const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    DataTableModule,
    ...materialModules,
  ],
  exports:[
    ...materialModules,
    RouterModule,
    DataTableModule
  ]
})
export class SharedModule { }
