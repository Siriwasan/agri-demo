import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductContent, GlobalVariables } from 'src/model/model';
import { ProductDetail } from 'src/model/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  id: string;
  product: ProductContent;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = GlobalVariables.Products.find(it=>it.id == this.id);
    console.log(this.product);
  }

  ngOnInit() {
    // this.httpClient
    //   .get<ProductContent>(
    //     'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetProduct/' + this.id
    //   )
    //   .subscribe(
    //     item => {
    //       // SUCCESS: Do something
    //       if (item != null) {
    //         this.product = item;
    //       }
    //       console.log(this.product);
    //     },
    //     error => {
    //       // ERROR: Do something
    //       console.log('error call api');
    //     }
    //   );
  }


}
