import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemlistComponent } from './itemlist/itemlist.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemlistComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule
  
  ],
  exports:[ItemlistComponent]
})
export class DataTableModule { }
