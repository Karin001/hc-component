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
  MatChipsModule,
  MatStepperModule
  } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DataTableModule } from './data-table/data-table.module';
import { BomFormModule } from './bom-form/bom-form.module';
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
  MatChipsModule,
  MatStepperModule
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    DataTableModule,
    BomFormModule,
    ...materialModules,
  ],
  exports:[
    ...materialModules,
    RouterModule,
    DataTableModule,
    BomFormModule
  ]
})
export class SharedModule { }
