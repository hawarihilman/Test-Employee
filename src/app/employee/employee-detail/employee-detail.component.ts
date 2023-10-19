import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  indexEmployee: number = 0;

  constructor(
    public employeeSvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const param: string = this.route.snapshot.paramMap.get('index') === null ? '': this.route.snapshot.paramMap.get('index') + '';
    const index = +param;
    this.indexEmployee = index;
  }
  
  ok(): void {
    this.router.navigate(['employee-list']);
  }

  getGroupName(groupCode: string): string {
    const group = this.employeeSvc.groups.find(group => group.code === groupCode);
    return group ? group.name : '';
  }
}
