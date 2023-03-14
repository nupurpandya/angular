import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  filteredValue:string=''
  users=[{name:"Nupur",age:22,technology:"Frontend",dob:new Date(2-16-2000)},{name:"Diya",age:20,technology:"Backend",dob:new Date(15-2-2001)},{name:"Maahi",age:21,technology:".NET",dob:new Date(16-2-2002)}];
}
