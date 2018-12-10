import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  bills: Bill[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<Bill[]>(
        'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetTransactions/agri-001'
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.bills = item;
          console.log(this.bills);
        },
        error => {
          // ERROR: Do something
          console.log('error call api');
        }
      );
  }
}
