import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  bills: Bill[];
  balance: number;
  date: string;
  mount: string;
  year: string;

  constructor(private httpClient: HttpClient) { }

  onChange($event) {
    console.log(this.date);
    this.getTransactionsByDate();
  }

  convertDate(date: Date) {
    return moment(date).format('d MMMM YYYY H:m');
  }

  getTransactionsByDate() {
    let dateTime = this.date.split("-");
    this.mount = dateTime[0];
    this.year = dateTime[1];
    this.httpClient
      .get<Bill[]>(
        'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetTransactionsByDate/agri-001/' + this.mount + '/' + this.year
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.bills = item;
          this.getBalance()
          console.log(this.bills);
        },
        error => {
          // ERROR: Do something
          console.log('error call api');
        }
      );
  }

  ngOnInit() {
    moment.locale('th');
    this.httpClient
      .get<Bill[]>(
        'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetTransactions/agri-001'
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.bills = item;
          this.getBalance()
          console.log(this.bills);
        },
        error => {
          // ERROR: Do something
          console.log('error call api');
        }
      );
  }

  getBalance() {
    this.balance = 0;
    if (this.bills != null && this.bills.length > 0) {
      this.bills.forEach(it => this.balance += it.totalAmount);
    }
  }
}
