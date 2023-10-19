import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService, Group } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  indexEmployee: number = 0;
  fcUsername: FormControl;
  fcFirstName: FormControl;
  fcLastName: FormControl;
  fcEmail: FormControl;
  fcBasicSalary: FormControl;
  fcStatus: FormControl;
  // fcGroup: FormControl;
  fcDescription: FormControl;

  birthDate: Date;
  maxDate: Date;
  selectedGroup: Group | undefined;
  
  constructor(
    public employeeSvc: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const param: string = this.route.snapshot.paramMap.get('index') === null ? '': this.route.snapshot.paramMap.get('index') + '';
    const index = +param;
    this.indexEmployee = index;
    this.fcUsername = new FormControl(employeeSvc.employees[index].username, Validators.required);
    this.fcFirstName = new FormControl(employeeSvc.employees[index].firstName, Validators.required);
    this.fcLastName = new FormControl(employeeSvc.employees[index].lastName, Validators.required);
    this.fcEmail = new FormControl(employeeSvc.employees[index].email, Validators.required);
    this.fcBasicSalary = new FormControl(employeeSvc.employees[index].basicSalary, Validators.required);
    this.fcStatus = new FormControl(employeeSvc.employees[index].status, Validators.required);
    // this.fcGroup = new FormControl(employeeSvc.employees[index].group, Validators.required);
    this.fcDescription = new FormControl(employeeSvc.employees[index].description, Validators.required);
    this.birthDate = new Date(employeeSvc.employees[index].birthDate);

    const data = employeeSvc.groups.find(group => group.code === employeeSvc.employees[index].group);
    this.selectedGroup = data;
    
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    this.maxDate = new Date();
    this.maxDate.setMonth(month);
    this.maxDate.setFullYear(year);
  }

  ngOnInit(): void {
    
  }
  
  submitEdit(): void {
    this.employeeSvc.employees[this.indexEmployee].username = this.fcUsername.value;
    this.employeeSvc.employees[this.indexEmployee].firstName = this.fcFirstName.value;
    this.employeeSvc.employees[this.indexEmployee].lastName = this.fcLastName.value;
    this.employeeSvc.employees[this.indexEmployee].email = this.fcEmail.value;
    this.employeeSvc.employees[this.indexEmployee].birthDate = this.birthDate.toDateString();
    this.employeeSvc.employees[this.indexEmployee].basicSalary = this.fcBasicSalary.value;
    // this.employeeSvc.employees[this.indexEmployee].group = this.fcGroup.value;
    this.employeeSvc.employees[this.indexEmployee].group = this.selectedGroup?.code + '';
    this.employeeSvc.employees[this.indexEmployee].description = this.fcDescription.value;
    this.router.navigate(['employee-list']);
  }
}
