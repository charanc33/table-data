import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,  AfterViewInit{
  @ViewChild ('firstModal') public firstModal: ModalDirective
  @Output() modalOutput = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.firstModal.show();
  }
  closeModal(){
    this.firstModal.hide();
    this.modalOutput.emit(" Closing the modal");
  }
  
}
