import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from './../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  flag: boolean = true;

  constructor(private employeeService: EmployeeServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.findAll();
    
    if ( (this.router.url).includes("/todo") ) {
      this.flag = false;
    }
  }

  remove(id: number): void {

		for (var i = 0; i < this.employees.length; i++) {
			if (this.employees[i].id == id) {
				this.employees.splice(i, 1);
				break;
			}
		}
  }
  
  detailRoute(id: number) {

    if( (this.router.url).includes("/todo") ) {
      this.router.navigate(['/todo/', id]);
    } else {
      this.router.navigate(['/employee-detail', id]);
    }

  }

}
