import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/model/model';
import { ProductContent } from 'src/model/model';
import { ProductDetail } from 'src/model/model';
import { ProductsPage } from '../products/products.page';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { List } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productContent: ProductContent;
  // name: string;
  // listPrice: number;
  // shopName: string;
  // details: string;
  images: string;

  constructor() {
    this.productContent = new ProductContent();
    this.productContent.product = new ProductDetail();
  }

  ngOnInit() {
  }

  addPro() {
    this.productContent.product.logo = "assets/icon/productPic.png";
    this.productContent.id = GlobalVariables.Products.length.toString();
    GlobalVariables.Products.push(this.productContent);
  }
}
