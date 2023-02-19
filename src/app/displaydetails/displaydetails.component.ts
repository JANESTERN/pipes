import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent {
  @Input()data:{name:string, adm:string, balance:string, course:string}[]=[]

  delete(){

  }
}
