import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  [x: string]: any;

  imageEmployees = [];

  addForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    
  })
  employeService: any;


  constructor() { }

  
  ngOnInit(): void {
    this.imageEmployees = this.employeService.getEmployeesList();
  }


  goToAboutPage(){
    this.router.navigateByUrl("/about")
  }


  addEmployee(){
    this.employeService.addEmployee(this.addForm.value);
    this.addForm.reset();
  }

}
