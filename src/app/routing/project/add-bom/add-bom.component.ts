import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bom',
  templateUrl: './add-bom.component.html',
  styleUrls: ['./add-bom.component.scss']
})
export class AddBomComponent implements OnInit {
  get tableRows(){
    return this.boms.map(ele=>ele.value)
  }
  get checkValid(){
    return this.boms.every(ele => ele.value['valid']==='VALID') && 
    Array.from(new Set(this.boms.map(ele =>ele.value['marking']?ele.value['marking']:''))).length === this.boms.length
  }
  tableColumns = [
    { prop: 'name', name: '名称' },
    { prop: 'marking', name: '型号' },
    { prop: 'quantity', name: '数量' },
    { prop: 'footprint', name: '封装' },
    { prop: 'volt', name: '耐压' },
    { prop: 'precision', name: '精度'},
    {prop:'manufacturer',name:'制造商'},
    {prop:'description',name:'描述'},
    {prop:'tag',name:'标签'}
  ]
  boms = [{
     value:{}
    // marking:'',
    // value:'',
    // volt:'',
    // tag:'',
    // description:'',
    // manufacturer:'',
    // precision:'',
    // quantity:'',
    // footprint:'',
    // valid:''
  }];
  constructor() { }

  ngOnInit() {
  }
  addBom(){
    this.boms.push(
      {
         value:{}
        // marking:'',
        // value:'',
        // volt:'',
        // tag:'',
        // description:'',
        // manufacturer:'',
        // precision:'',
        // quantity:'',
        // footprint:'',
        // valid:''
      }
    )
  }
  onStatusChange(value, index){
    console.log(value)
    this.boms[index].value = value
    console.log(this.boms[index])
  }
  delete(event,i){
    event.stopPropagation();
   
    this.boms.splice(i,1)
  }
}
