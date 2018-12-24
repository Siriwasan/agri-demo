import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guid } from "guid-typescript";
import { AlertController } from '@ionic/angular';

import * as firebase from 'firebase';
import { async } from 'q';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  constructor(private http: HttpClient, private alertCtrl: AlertController) { }

  ngOnInit() {

  }

  DeleteData() {
    // var addData = this.AddData;
    // var totalDocument = 0;
    // var deleteFinishedCount = 0;
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then(async (querySnapshot) => {
        // totalDocument = querySnapshot.docs.length;
        // deleteFinishedCount = 0;
        querySnapshot.forEach((doc) => {
          firebase
            .firestore()
            .collection("orders")
            .doc(doc.id)
            .delete().then(() => {

            }).catch((error) => {
            });
        });
        const alert = await this.alertCtrl.create({
          header: 'ลบข้อมูลสำเร็จ',
          buttons: ['ตกลง']
        });

        await alert.present();
      })
      .catch(async (error) => {
        const alert = await this.alertCtrl.create({
          header: 'ลบข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง',
          buttons: ['ตกลง']
        });

        await alert.present();
      });
  }

  async AddData () {
    var date1: Date = new Date();
    var date2: Date = new Date();
    date1.setDate(date1.getDate() - 1);
    date2.setDate(date2.getDate() - 1);

    firebase
      .firestore()
      .collection("orders")
      .doc()
      .set({
        Id: Guid.create().toString(),
        UserId: "somsor@perfenterprise.com",
        ProductItems: [{
          Product: {
            ShopId: "agri-001",
            ShopLogo: "https://demoagri.azurewebsites.net/images/farmer.jpg",
            ShopName: "สหกรณ์การเกษตร 4.0",
            ProductId: "p0001",
            Name: "ข้าวกล้องหอมมะลิ 105 สูญญากาศ เกรดA (1กก.)",
            NameExtension: "string",
            Logo: "https://demoagri.azurewebsites.net/images/product7.png",
            Details: "",
            PriceRangeMin: 60,
            PriceRangeMax: 60,
            ListPrice: 60,
            ExtendedDatas: [],
            TempExtendedDatas: "[]",
            ExpireTierCode: "Default",
            Tags: [
              "sirinarin@perfenterprise.com"
            ],
            Discount: 0,
            Currency: "THB"
          },
          Quantity: 1,
          StockQuantity: 1,
          Price: 60,
          Discount: 0,
          DiscountExpireDate: null,
          DisplayExtraDataFields: null,
          Id: "p0001",
          Name: "ข้าวกล้องหอมมะลิ 105 สูญญากาศ เกรดA (1กก.)",
          NameExtension: "string",
          Logo: "https://demoagri.azurewebsites.net/images/product7.png",
          Tags: [
            "sirinarin@perfenterprise.com"
          ]
        }],
        MemberItems: null,
        Address: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        ShippingAddress: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        BillingAddress: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        ShippingMethod: {
          Name: "Kerry Express",
          Type: "Kerry",
          ShippingFees: 0
        },
        Membership: {
          MemberLevel: null,
          Point: null,
          RegisterDate: "0001-01-01T00:00:00Z",
          ExpiredDate: null
        },
        ShopId: "agri-001",
        ShopLogo: "https://demoagri.azurewebsites.net/images/farmer.jpg",
        ShopName: "สหกรณ์การเกษตร 4.0",
        Tags: [],
        Remark: "",
        Contact: {
          Email: null,
          Mobile: null
        },
        Template: "",
        TotalPrice: 60,
        Discount: 0,
        GrandTotal: 60,
        Nationality: "THB",
        ShopCurrencyList: [],
        CustomerCurrency: [],
        CheckOutedDateTime: date1.toISOString(),
        ReceiptId: "",
        CartStatus: "Paid",
        RecordStatus: "Read"
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    firebase
      .firestore()
      .collection("orders")
      .doc()
      .set({
        Id: Guid.create().toString(),
        UserId: "somsor@perfenterprise.com",
        ProductItems: [{
          Product: {
            ShopId: "agri-001",
            ShopLogo: "https://demoagri.azurewebsites.net/images/farmer.jpg",
            ShopName: "สหกรณ์การเกษตร 4.0",
            ProductId: "p0001",
            Name: "ข้าวหอมมะลิ 105 สูญญากาศ (1กก.)",
            NameExtension: "string",
            Logo: "https://demoagri.azurewebsites.net/images/product4.png",
            Details: "",
            PriceRangeMin: 55,
            PriceRangeMax: 55,
            ListPrice: 55,
            ExtendedDatas: [],
            TempExtendedDatas: "[]",
            ExpireTierCode: "Default",
            Tags: [
              "sirinarin@perfenterprise.com"
            ],
            Discount: 0,
            Currency: "THB"
          },
          Quantity: 1,
          StockQuantity: 1,
          Price: 55,
          Discount: 0,
          DiscountExpireDate: null,
          DisplayExtraDataFields: null,
          Id: "p0001",
          Name: "ขข้าวหอมมะลิ 105 สูญญากาศ (1กก.)",
          NameExtension: "string",
          Logo: "https://demoagri.azurewebsites.net/images/product4.png",
          Tags: [
            "sirinarin@perfenterprise.com"
          ]
        }],
        MemberItems: null,
        Address: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        ShippingAddress: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        BillingAddress: {
          ReceiverName: "สมเกียรติ สอนนวล",
          Line1: "189/45 ซอย5",
          Line2: "ต.ในเมือง อ.เมือง",
          Province: "ขอนแก่น",
          ZipCode: "40000",
          FullAddress: "189/45 ซอย5 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
        },
        ShippingMethod: {
          Name: "Kerry Express",
          Type: "Kerry",
          ShippingFees: 0
        },
        Membership: {
          MemberLevel: null,
          Point: null,
          RegisterDate: "0001-01-01T00:00:00Z",
          ExpiredDate: null
        },
        ShopId: "agri-001",
        ShopLogo: "https://demoagri.azurewebsites.net/images/farmer.jpg",
        ShopName: "สหกรณ์การเกษตร 4.0",
        Tags: [],
        Remark: "",
        Contact: {
          Email: null,
          Mobile: null
        },
        Template: "",
        TotalPrice: 55,
        Discount: 0,
        GrandTotal: 55,
        Nationality: "THB",
        ShopCurrencyList: [],
        CustomerCurrency: [],
        CheckOutedDateTime: date2.toISOString(),
        ReceiptId: "",
        CartStatus: "Paid",
        RecordStatus: "Read"
      })
      .then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'เพิ่มข้อมูลสำเร็จ',
          buttons: ['ตกลง']
        });

        await alert.present();
      })
      .catch(async (error) => {
        const alert = await this.alertCtrl.create({
          header: 'เพิ่มข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง',
          buttons: ['ตกลง']
        });

        await alert.present();
      });
  }

  DeleteManaFeed(account: string) {
    this.http.get('https://workflowtemp-rdev.azurewebsites.net/api/ManaHome/' + account)
      .subscribe(
        async data => {
          const alert = await this.alertCtrl.create({
            header: 'ลบข้อมูลของ ' + account + ' สำเร็จ',
            buttons: ['ตกลง']
          });

          await alert.present();
        }
      );
  }
}
