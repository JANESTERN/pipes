import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communication';
  data:{name:string, adm:string,balance:string,course:string}[]=[]

  addStudent(event:{name:string, adm:string,balance:string,course:string}){ 
    this.data.push({name:event.name, adm:event.adm, balance:event.balance,course:event.course})
  }
}
