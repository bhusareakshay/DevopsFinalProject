import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { interfaceResponse } from '../interfaceResponse';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {

  @Input() showBtn: any;
  @Output() show = new EventEmitter<string>();
  
  constructor(private service: AppServiceService) { 

  }
  
  viewall: any = [];
  expandView: boolean = false;
  view: any;
  
  ngOnInit(): void {
    this.getAlltodo();
  }
  
  getAlltodo() {
    this.service.get('todos').subscribe(x => {
    this.viewall = x;
    this.viewall.reverse();
    });
  }
  
  emit() {
    this.show.emit("View");
  }
  
  expand(x: any) {
    this.expandView = true;
    this.view = x;
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  spanClick(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  delete(x: interfaceResponse) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    this.service.delete<interfaceResponse>('todos', arr).subscribe(y=>{
      this.getAlltodo();
    });
  }

  complete(x: any) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    let body = Object(x);
    body.isCompleted = true;
    this.service.put<interfaceResponse>('todos', body, arr).subscribe(y =>{
      body.modifiedDate = y.modifiedDate;
    });
  }

  inComplete(x: any) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    let body = Object(x);
    body.isCompleted = false;
    this.service.put<interfaceResponse>('todos', body, arr).subscribe(y =>{
      body.modifiedDate = y.modifiedDate;
    });
  }

}
