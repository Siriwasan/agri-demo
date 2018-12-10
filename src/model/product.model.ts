interface ProductContent {
  id: string;
  name?: any;
  price: number;
  tags?: any;
  refId?: any;
  shopId?: any;
  isExpress: boolean;
  mContentFormEndpointId?: any;
  expireDate?: Date;
  product: Product;
  mContentId: string;
  type: string;
}

interface Product {
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