import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [ { path : 'employee-list', component : EmployeeListComponent },
                         { path : 'employee-detail/:id', component : EmployeeDetailComponent },
                         { path : 'department-list', component : DepartmentListComponent },
                         { path : 'department-detail/:dept', component : DepartmentDetailComponent},
                         { path : 'todo', component : TodoComponent},
                         { path : 'todo/:id', component : TodoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
