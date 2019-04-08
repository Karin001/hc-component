import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-add-bom-form',
  templateUrl: './add-bom-form.component.html',
  styleUrls: ['./add-bom-form.component.scss']
})
export class AddBomFormComponent implements OnInit {
  bomGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.bomGroup = this.fb.group({
      marking: [''],
      name: [''],
      footprint: [''],
      value: [''],
      volt: [''],
      precision: [''],
      quantity: [''],
      description:[''],
      tag:[''],
      manufacturer:['']
    })
  }

  ngOnInit() {
  }

}
