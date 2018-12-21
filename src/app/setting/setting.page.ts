import { Component, OnInit } from '@angular/core';
import { Guid } from "guid-typescript";

import * as firebase from 'firebase';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  constructor() {}

  ngOnInit() {

  }

  SetData() {
    var addData = this.AddData;
    var totalDocument = 0;
    var deleteFinishedCount = 0;
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then(function (querySnapshot) {
        totalDocument = querySnapshot.docs.length;
        deleteFinishedCount = 0;
        querySnapshot.forEach(function (doc) {
          firebase
            .firestore()
            .collection("orders")
            .doc(doc.id)
            .delete().then(function () {
              console.log("Document successfully deleted!");
              deleteFinishedCount ++ ;
              if(deleteFinishedCount == totalDocument){
                console.log("Document creating ...");
                addData();
              }
            }).catch(function (error) {
              console.error("Error removing document: ", error);
            });
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

 AddData = function() {
  var date1: Date = new Date();
  var date2: Date = new Date();
  date1.setDate(date1.getDate() - 1);
  date2.setDate(date2.getDate() - 2);

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
            Name: "ข้าวกล้องหอมมะลิ 105 (1กก.)",
            NameExtension: "string",
            Logo: "https://demoagri.azurewebsites.net/images/product7.png",
            Details: "",
            PriceRangeMin: 40,
            PriceRangeMax: 40,
            ListPrice: 40,
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
          Price: 40,
          Discount: 0,
          DiscountExpireDate: null,
          DisplayExtraDataFields: null,
          Id: "p0001",
          Name: "ข้าวกล้องหอมมะลิ 105 (1กก.)",
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
        TotalPrice: 40,
        Discount: 0,
        GrandTotal: 40,
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
            Name: "ข้าวหอมมะลิ 105 (1กก.)",
            NameExtension: "string",
            Logo: "https://demoagri.azurewebsites.net/images/product4.png",
            Details: "",
            PriceRangeMin: 30,
            PriceRangeMax: 30,
            ListPrice: 30,
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
          Price: 30,
          Discount: 0,
          DiscountExpireDate: null,
          DisplayExtraDataFields: null,
          Id: "p0001",
          Name: "ข้าวหอมมะลิ 105 (1กก.)",
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
        TotalPrice: 30,
        Discount: 0,
        GrandTotal: 30,
        Nationality: "THB",
        ShopCurrencyList: [],
        CustomerCurrency: [],
        CheckOutedDateTime: date2.toISOString(),
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
      alert("ตั้งค่าสำเร็จ !");
  }
}
