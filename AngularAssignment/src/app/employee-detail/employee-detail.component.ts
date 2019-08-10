import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnChanges {

  @Input() id: number = 0;
  id_detail: number;
  employee: Employee;
  flag: boolean = true;
  flag_update: boolean = true;
  flag_name: boolean = false;
  flag_age: boolean = false;
  flag_dept: boolean = false;
  // @Input() todo_id: number;

  constructor(private activatedRoute: ActivatedRoute, 
              private employeeService: EmployeeServiceService, 
              private router: Router) { }


  ngOnInit() {

    if( ( (this.router.url).includes("/employee-detail") ) ) {
      this.activatedRoute.params.subscribe(q => {
        this.id_detail = q.id || 0;
        this.employee = this.employeeService.find(this.id_detail);
      });
    }

    if ( (this.router.url).includes("/todo") ) {
      this.flag_update = false;
    }

  }
  
  ngOnChanges(changes: any) {
    
    if( ( (this.router.url).includes("/todo/") ) ) {
      this.employee = this.employeeService.find(changes.id.currentValue);
    } else {
      this.flag = false;
    }

  }

  onUpdate() {
    this.flag_name = true;
    this.flag_age = true;
    this.flag_dept = true;
    this.flag_update = false;
  }

  onEnter(opt: string) {
    
    if( opt === 'name' ) {
      this.flag_name=false;
    } else if( opt === 'age' ) {
      this.flag_age=false;
    } else if( opt === 'dept' ) {
      this.flag_dept=false;
    }

    if( !this.flag_name && !this.flag_age && !this.flag_dept ) {
      this.flag_update = true;
    }
  
  }

}
