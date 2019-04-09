import { Component, OnInit, ViewEncapsulation, Input, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemlistComponent implements OnInit {

  @Input() columns = [
    { prop: 'name', name: '名称' },
    { prop: 'marking', name: '型号' },
    { prop: 'quantity', name: '数量' },
    { prop: 'unit', name: '单位' },
    { prop: 'where', name: '位置' },
    { prop: 'number', name: '系统编号' }
  ]
  @Input() dackMode = true;
  @Input() rows;
  select = new EventEmitter();
  selectedNumber;
  selectedChange;
  constructor(
    private router: Router,
  
  ) {
    this.fetch((data) => {
      if(!this.rows){
        this.rows = data;
      }
      
    });
    // this.restapi.stream_allItem().subscribe((data) => {
    //   if (data['code'] === 'not_logIn') {
    //     this.rows = [];
    //     console.log(data['message']);
    //   } else if (data['code'] === 'no_data') {
    //     this.rows = [];
    //     console.log(data['message']);
    //   } else {
    //     console.log(data);
    //     this.rows = data['fb']['items'];
    //     this.localdata.localData = data['fb']['items'];
    //   }

    // })
  }

  ngOnInit() {
    
  }
  onSelect({ selected }) {
    console.log('Select Event', selected);
    if (this.selectedNumber === selected[0]['number']) {
      this.selectedChange = false;
    } else {
      this.selectedChange = true;
      this.selectedNumber = selected[0]['number'];
    }

    this.select.emit(selected);

  }

  //只需更改此函数即可更换图片数据来源，数据格式需要与imglist.json一致
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/itemlist.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


}
