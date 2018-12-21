import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'รายการสั่งซื้อสินค้า',
      url: '/order-list',
      icon: 'photos'
    },
    {
      title: 'จัดการสินค้า',
      url: '/store',
      icon: 'cart'
    },
    {
      title: 'บัญชี',
      url: '/account',
      icon: 'journal'
    },
    {
      title: 'ตั้งค่า',
      url: '/setting',
      icon: 'settings'
    },
  ];
  orders: Order[] = [];
  newOrders = 0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.getOrders();
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

        this.countNewOrders();
        console.log('order ' + change.type);
      });
    });
  }

  countNewOrders() {
    this.newOrders = 0;
    this.orders.forEach(order => {
      if (order.RecordStatus === 'Unread') {
        this.newOrders++;
      }
    });
  }
}
