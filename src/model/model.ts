import { ProductsPage } from './../app/products/products.page';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export class GlobalVariables {
  static Products: ProductContent[] = [];
  // static GlobalVariables: ProductContent;
}

export class ProductContent {
  id: string;
  name?: any;
  price: number;
  tags?: any;
  refId?: any;
  shopId?: any;
  isExpress: boolean;
  mContentFormEndpointId?: any;
  expireDate?: Date;
  product: ProductDetail;
  mContentId: string;
  type: string;
}

export class ProductDetail {
  shopId: string;
  shopLogo: string;
  shopName: string;
  productId: string;
  name: string;
  nameExtension: string;
  logo: string;
  details: string;
  priceRangeMin: number;
  priceRangeMax: number;
  listPrice: number;
  extendedDatas: any[];
  tempExtendedDatas: string;
  expireTierCode: string;
  tags: string[];
  discount: number;
  currency: string;
}