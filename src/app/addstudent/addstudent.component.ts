import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
  
})
export class AddstudentComponent {
  @Output()sentdetails= new EventEmitter<{name:string,adm:string,balance:string,course:string}>()
  addStudent(name:HTMLInputElement,adm:HTMLInputElement,balance:HTMLInputElement,course:HTMLSelectElement){
    this.sentdetails.emit({name:name.value,adm:adm.value,balance:balance.value,course:course.value})
  }

}
