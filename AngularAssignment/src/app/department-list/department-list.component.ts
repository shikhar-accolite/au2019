import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: any;

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.departments = this.employeeService.findAllDept();
  }

}
