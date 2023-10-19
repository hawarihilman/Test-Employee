import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'employee-list/edit/:index',
        component: EmployeeEditComponent
      },
      {
        path: 'employee-list/add',
        component: EmployeeAddComponent
      },
      {
        path: 'employee-list/detail/:index',
        component: EmployeeDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
