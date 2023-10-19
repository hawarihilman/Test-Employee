import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeService } from './employee/employee.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    DropdownModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
