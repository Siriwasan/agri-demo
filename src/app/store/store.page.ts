import { AddProductPage } from './../add-product/add-product.page';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariables } from 'src/model/model';
import { ProductContent } from 'src/model/model';
import { ProductDetail } from 'src/model/model';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  [x: string]: any;
  products: ProductContent[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
    .get<ProductContent[]>(
      'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetProducts/agri-001'
    )
    .subscribe(
      item => {
        // SUCCESS: Do something
        GlobalVariables.Products = item;
        this.products = GlobalVariables.Products;
        console.log(GlobalVariables.Products);
      },
      error => {
        // ERROR: Do something
        console.log(error);
      }
    );
  } 

}
