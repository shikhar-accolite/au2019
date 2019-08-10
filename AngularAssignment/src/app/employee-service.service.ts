import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee';

import { HttpClient } from '@angular/common/http';
import employee_data from "../assets/employees.json";
import department_data from "../assets/departments.json";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService implements OnInit {

  private employees: any;
  private departments: any;

  constructor(private http: HttpClient) {
    this.employees = employee_data;
    this.departments = department_data;
  }

  ngOnInit() {
  }

  findAll(): Employee[] {
    return this.employees;
  }

  find(id: number): Employee {
    return this.employees[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number): number {
    for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id == id) {
            return i;
        }
    }
    return -1;
  }

  findAllDept() {
    // let depts = new Set();
    // for (var i = 0; i < this.employees.length; i++) {
    //   depts.add(this.employees[i].dept);
    // }
    return this.departments;
  }

  findDept(dept: string) {
    for (var i = 0; i < this.departments.length; i++) {
      if (this.departments[i].dept_name === dept) {
          return this.departments[i];
      }
    }
  }

  getJSON() {
    return this.http.get("./assets/departments.json");
  }

}
