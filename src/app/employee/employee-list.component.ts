import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements AfterViewInit {
  fcSearch: FormControl;
  @ViewChild('dt1', { static: true }) dt1: ElementRef;

  constructor(
    public employeeSvc: EmployeeService,
    private router: Router
  ) {
    this.dt1 = new ElementRef(null);
    const data = sessionStorage.getItem('employeeSearch');
    if (data) {
      this.fcSearch = new FormControl(data);
    } else {
      this.fcSearch = new FormControl();
    }
    
    this.fcSearch.valueChanges.subscribe(
      changes => {
        sessionStorage.setItem('employeeSearch', changes);
        console.log('changes', changes)
      }
    )
  }

  goToEdit(index: number): void {
    this.router.navigate(['/employee-list/edit/' + index]);
  }
  
  deleteEmployee(index: number): void {
    this.employeeSvc.employees.splice(index, 1);
  }

  addEmployee(): void {
    this.router.navigate(['/employee-list/add']);
  }

  goToDetail(index: number): void {
    this.router.navigate(['/employee-list/detail/' + index]);
  }

  ngAfterViewInit(): void {
    
    const data = sessionStorage.getItem('employeeSearch');
    if (data) {
      const containerDt: any = this.dt1;
      containerDt.filterGlobal((data), 'contains')
    } else {
    }
  }
  
}
