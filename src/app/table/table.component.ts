import { Component, OnInit } from '@angular/core';
import { TabletService } from '../services/tabletwo.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { log } from 'util';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 dataForChild="childata";
 tabletData;
 showModal = false;
 exampleForm:FormGroup;
 list=[];
 index;
 

 
 
  constructor( private tabletservice: TabletService, private formBuilder: FormBuilder ) {
    this.exampleForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl('')
    });

   }

  ngOnInit() {
    this.getTabletDataFromService();
  }
  childComponentMethodClick(event){
    this.getTabletDataFromService
    console.log(event);
    console.log(
      'in table component'
    );
    
  
  }

  getTabletDataFromService() {
    this.tabletservice.getTabletData().subscribe((res) => {
      this.tabletData= res['data'];
      console.log(this.tabletData);
    }, (err) =>{
      console.log(err);
    });
  }

  modalClose(){
    this.showModal=false;
  }
  onButtonClick(){
    this.showModal=true;
  }

  onSubmitClick(){
    const submitData={
      firstName:this.exampleForm.controls.firstName.value,
      lastName:this.exampleForm.controls.lastName.value
    }
    if(this.index || this.index===0)
    {
    this.list[this.index]=submitData;
    this.index='';
    }
  
    else{
      this.list.push(submitData);
    }
    this.exampleForm.controls.firstName.setValue('');
    this.exampleForm.controls.lastName.setValue('');
  }
  editTable(item,i){
    this.exampleForm.controls.firstName.setValue(item.firstName);
    this.exampleForm.controls.lastName.setValue(item.lastName);
    this.index=i;
    console.log(this.index);
    
  }

}
