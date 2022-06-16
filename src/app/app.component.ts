import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showGrid : boolean = false;
  title = 'devxtreme-demo';

  helloWorld(){
    
    console.log("hello world")

  }

  employees: Employee[] = [];
 
    constructor(private service: EmployeeService) {
       // this.employees = service.getEmployees();
    }

    clickEvent(){
      this.showGrid=true;
      this.employees = this.service.getEmployees();
    }

    showPopup(){
      this.employees = this.service.getEmployees();
    }
}
