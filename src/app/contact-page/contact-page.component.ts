import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  imageEmployees: any;
  employeService: any;

  constructor() { }

  ngOnInit(): void {
    this.imageEmployees = this.employeService.getEmployeesList();
  }

}
