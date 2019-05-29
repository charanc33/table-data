import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  @Input() tableDataInput;
  @Output() outputEvent = new EventEmitter();
  tableData;
  search;
  showModal = false;
  
  
  

  constructor(private tableService: TableService) { }

  ngOnInit() {
    console.log(this.tableDataInput);
    this.getTableDataFromService();
  }

  tableDataClick() {
    console.log("table data is clicked");
    this.outputEvent.emit({ event: 'out put event from table data' });
  }


  getTableDataFromService() {
    this.tableService.getTableData().subscribe((res) => {
      this.tableData= res['data'];
      console.log(this.tableData);
    }, (err) =>{
      console.log(err);
    });
  }
  onSearchClick(){
    this.showModal= true;
  }
  modalClose(event){
    this.showModal=false;
    console.log(event);
  }
  deleteButton(index){
    // delete this.tableData[index];
    this.tableData.splice(index,1);
    console.log(this.tableData);
    
  }

}
