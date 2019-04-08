import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBomFormComponent } from './add-bom-form/add-bom-form.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatExpansionModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
const materialModules = [
 
  MatButtonModule,
  
 
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,

  MatProgressBarModule,


  
 

  MatExpansionModule,

  MatStepperModule
]
@NgModule({
  declarations: [AddBomFormComponent],
  imports: [
    CommonModule,
    materialModules,
    ReactiveFormsModule

  ],
  exports:[AddBomFormComponent]
})
export class BomFormModule { }
