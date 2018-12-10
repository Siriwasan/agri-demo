import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orders: Order[] = [];
  test = 'art';

  constructor() { }

  ngOnInit() {
    this.getOrders();
    moment.locale('th');
  }

  getOrders() {
    const query = firebase
      .firestore()
      .collection('orders')
      .orderBy('CheckOutedDateTime', 'asc');

    query.onSnapshot(snapshot => {
      const changedDocs = snapshot.docChanges();

      changedDocs.forEach(change => {
        if (change.type === 'added') {
          this.orders.unshift(change.doc.data() as Order);
        }

        if (change.type === 'modified') {
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].Id === change.doc.data().Id) {
              this.orders[i] = change.doc.data() as Order;
            }
          }
        }

        if (change.type === 'removed') {
          this.orders.splice(this.orders.indexOf(change.doc.data().Id));
        }

        console.log('order ' + change.type);
      });
    });
  }

  ago(time) {
    const difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  convertDate(date: Date) {
    return moment(date).format('LLL');
  }
}
