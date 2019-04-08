import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bom',
  templateUrl: './add-bom.component.html',
  styleUrls: ['./add-bom.component.scss']
})
export class AddBomComponent implements OnInit {
  boms = [{
    marking:1
  }];
  constructor() { }

  ngOnInit() {
  }

}
