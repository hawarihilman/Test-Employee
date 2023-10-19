import { Injectable } from '@angular/core';

export interface Group {
  name: string;
  code: string;
}
export class Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate : string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
  constructor(id: number, username: string, firstName: string, lastName: string, email: string, birthDate: string, basicSalary: number, status: string, group: string, description: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.basicSalary = basicSalary;
    this.status = status;
    this.group = group;
    this.description = description;
  }
}

@Injectable()
export class EmployeeService {
  employees: Array<Employee>;
  groups: Array<Group>;

  constructor() { 
    this.employees = [];
    this.groups = [
      {
        name: 'Scarlet',
        code: 'Scar'
      },
      {
        name: 'Violet',
        code: 'Vio'
      },
      {
        name: 'Emerald',
        code: 'Emer'
      },
      {
        name: 'Leaf Green',
        code: 'Leaf'
      },
      {
        name: 'Fire Red',
        code: 'Fire'
      },
      {
        name: 'Sapphire',
        code: 'Saph'
      },
      {
        name: 'Ruby',
        code: 'Ruby'
      },
      {
        name: 'Platinum',
        code: 'Plat'
      },
      {
        name: 'Sun',
        code: 'Sun'
      },
      {
        name: 'Moon',
        code: 'Moon'
      }
    ];

    for (let i = 1; i < 101; i++) {
      this.employees.push(new Employee(i,'username '+i, 'firstName '+i, 'lastName '+i, 'email'+i+'@gmail.com', new Date().toDateString(), 1000000 * i, i % 2 === 0? 'Active' : 'Inactive', this.groups[(i%10)].code, new Date().toDateString()));
    }
  }
}
