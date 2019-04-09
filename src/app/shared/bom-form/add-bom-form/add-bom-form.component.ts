import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-add-bom-form',
  templateUrl: './add-bom-form.component.html',
  styleUrls: ['./add-bom-form.component.scss']
})
export class AddBomFormComponent implements OnInit {
  @Input() bomType = 'project'
  @Output() bomValid = new EventEmitter<string>()
  bomGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.bomGroup = this.fb.group({
      marking: ['',Validators.required],
      name: ['',Validators.required],
      footprint: ['',Validators.required],
      value: [''],
      volt: [''],
      precision: [''],
      quantity: ['',Validators.required],
      description:[''],
      tag:[''],
      manufacturer:['']
    })
  }

  ngOnInit() {
    this.bomGroup.statusChanges.
    subscribe(valid => {
      console.log(this.bomGroup.value)
      this.bomValid.emit({...this.bomGroup.value,valid})
    })
  }

}
