import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { IMPdataObj } from 'src/app/utils/importBom';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  dataObj: IMPdataObj;
  workbook: XLSX.WorkBook;
  name: string;
  sheet: XLSX.Sheet;
  items = [];
  constructor() { }

  ngOnInit() {
  }
  onOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  onDrop(e) {
  //   console.log('e', e);
  //   e.stopPropagation();
  //   e.preventDefault();
  //   const file = e.dataTransfer.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const data = e.target['result'];
  //     this.workbook = XLSX.read(data, { type: 'binary' });
  //     this.name = this.workbook.SheetNames[0];
  //     console.log('sheet1', this.workbook.Sheets[this.name]);
  //     this.sheet = this.workbook.Sheets[this.name];
  //     const localItem =
  //       this.restApi.localItemList && this.restApi.localItemList.items ?
  //         this.restApi.localItemList.items :
  //         [];
  //     this.dataObj = new IMPdataObj(this.sheet, localItem, this.itemFormatData.itemTypes);
  //     console.log(this.dataObj.impProperties);
  //     this.dataObj.propertyRequireVd();
  //     console.log(this.dataObj._valid, this.dataObj._errorMessage);
  //     if (!this.dataObj._valid) {
  //       throw new Error(this.dataObj._errorMessage.join(';'));
  //     }
  //     this.dataObj.chargeItem();
  //     console.log(this.dataObj);
  //     this.dataObj.dupOrMissVd();
  //     if (!this.dataObj._valid) {
  //       throw new Error(this.dataObj._errorMessage.join(';'));
  //     } else {
  //       console.log(this.dataObj._hintMessage);
  //     }
  //     this.dataObj.distItems.forEach(item => {
  //       if (!item['quantity']) {
  //         item['quantity'] = 0;
  //       }
  //       for (const pro in item) {
  //         if (item.hasOwnProperty(pro)) {
  //           this.dataObj.itemVd(pro, item);
  //           if (pro === 'name') {
  //             if (!Object.keys(this.itemFormatData.baseSets).includes(item[pro])) {
  //               this.itemFormatData.baseSets[item[pro]] = [];
  //               this.itemFormatData.itemTypes[item[pro]] = ['无', '使用自定义子类'];
  //               this.itemFormatData.baseSets[item[pro]].push(
  //                 'marking', 'childType', 'footprint', 'quantity', 'description', 'customtag', 'brand');
  //               if (item['value']) {
  //                 this.itemFormatData.baseSets[item[pro]].push('value');
  //               }
  //               if (item['volt']) {
  //                 this.itemFormatData.baseSets[item[pro]].push('volt');
  //               }
  //               if (item['precise']) {
  //                 this.itemFormatData.baseSets[item[pro]].push('precise');
  //               }
  //               this.itemFormatData.baseSets[item[pro]].push('submit');
  //             }
  //             console.log('zhulei',this.itemFormatData.baseSets);
  //           }
  //         }
  //       }
  //     });
  //     console.log(this.dataObj);


  //     /* DO SOMETHING WITH workbook HERE */
  //   };
  //   reader.readAsBinaryString(file);
   }
}
