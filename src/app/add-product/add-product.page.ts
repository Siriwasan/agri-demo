import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/model/model';
import { ProductContent } from 'src/model/model';
import { ProductDetail } from 'src/model/model';
import { ProductsPage } from '../products/products.page';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  constructor() 
  {
    this.productContent = new ProductContent();
    this.productContent.product = new ProductDetail();
   }

  ngOnInit() {
  }

  addPro() {
    // GlobalVariables.addProduct.product.name = this.name;
    // GlobalVariables.addProduct.product.listPrice = this.listPrice;
    // GlobalVariables.addProduct.product.shopName = this.shopName;
    // GlobalVariables.addProduct.product.details = this.details;


    //GlobalVariables.Products = this.productContent;

    console.log( GlobalVariables.Products);

  }
}
