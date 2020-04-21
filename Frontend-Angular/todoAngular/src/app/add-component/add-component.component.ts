import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {
  @Input() showBtn: any;
  @Output() show = new EventEmitter<string>();
  
  constructor(private service: AppServiceService) { 

  }
  
  addTodoForm: any;
  
  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      dueDate: new FormControl(''),
      dueTime: new FormControl('')
    });
  }
  
  emit() {
    this.show.emit("Add");
  }
  
  save() {
    let date = this.addTodoForm.get('dueDate').value;
    let time = this.addTodoForm.get('dueTime').value;
    let UtcDate, dateSave, save;
    if (date) {
      UtcDate = new Date(date);
      if (time) {
        UtcDate.setHours(time.toString().substring(0, 2));
        UtcDate.setMinutes(time.toString().substring(3, 5));
        save = true;
      }
      dateSave = UtcDate.toISOString();
    }
    
    let body = {
      title: this.addTodoForm.get('title').value,
      description: this.addTodoForm.get('description').value,
      dueDate:dateSave 
    };
    
    if(body.title != null && body.description != null && body.dueDate != null && save == true )  {
      this.service.post('todos',body).subscribe(y =>{
        this.emit();
      });
    }
   
  }
}
