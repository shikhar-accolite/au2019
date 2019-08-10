import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  dept: string;
  department: any;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(q => {
      this.dept = q.dept;
    });

    this.department = this.employeeService.findDept(this.dept);
  }

}
