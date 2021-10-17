import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees = [];

  constructor() { }

  getEmployeesList(){
    return this.employees;
  }

  addEmployee(employee){
    this.employees.push(employee);
  }
}
