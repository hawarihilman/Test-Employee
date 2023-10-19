import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Employee, EmployeeService, Group } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {
  fcUsername: FormControl;
  fcFirstName: FormControl;
  fcLastName: FormControl;
  fcEmail: FormControl;
  // fcBirthDate: FormControl;
  birthDate: Date;
  fcBasicSalary: FormControl;
  fcStatus: FormControl;
  // fcGroup: FormControl;
  fcDescription: FormControl;
  selectedGroup: Group | undefined;

  maxDate: Date;
  
  constructor(
    public employeeSvc: EmployeeService,
    private router: Router,
  ) {
    this.fcUsername = new FormControl('', Validators.required);
    this.fcFirstName = new FormControl('', Validators.required);
    this.fcLastName = new FormControl('', Validators.required);
    this.fcEmail = new FormControl('', Validators.required);
    // this.fcBirthDate = new FormControl('', Validators.required);
    this.fcStatus = new FormControl('', Validators.required);
    this.fcBasicSalary = new FormControl('', Validators.required);
    // this.fcGroup = new FormControl('', Validators.required);
    this.fcDescription = new FormControl('', Validators.required);
    this.birthDate = new Date();

    
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    this.maxDate = new Date();
    this.maxDate.setMonth(month);
    this.maxDate.setFullYear(year);
  }

  cancel(): void {
    this.router.navigate(['employee-list']);
  }
  
  submitPush(): void {
    this.employeeSvc.employees.push(new Employee(this.employeeSvc.employees.length,this.fcUsername.value, this.fcFirstName.value, this.fcLastName.value, this.fcEmail.value, this.birthDate.toDateString(), this.fcBasicSalary.value,this.fcStatus.value, this.selectedGroup?.code + '', this.fcDescription.value));
    this.router.navigate(['employee-list']);
  }
}
