import { AddProductPage } from './../add-product/add-product.page';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductContent, GlobalVariables } from 'src/model/model';
import { ProductDetail } from 'src/model/model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  [x: string]: any;
  products: ProductContent[];

  constructor(private httpClient: HttpClient) {
    this.products = GlobalVariables.Products;
  }

  ngOnInit() {
    // this.httpClient
    //   .get<ProductContent[]>(
    //     'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetProducts/agri-001'
    //   )
    //   .subscribe(
    //     item => {
    //       // SUCCESS: Do something
    //       this.products = item;
    //       console.log(this.products);
    //     },
    //     error => {
    //       // ERROR: Do something
    //       console.log(error);
    //     }
    //   );
  }

}
