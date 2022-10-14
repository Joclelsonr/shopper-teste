export interface ProductDB {
  id: string;
  name: string;
  price: string;
  qty_stock: string;
}

export interface PurchasesDB {
  id: string;
  product_name: string;
  total_price: string;
  quantity: number;
}

class Product {
  constructor(
    private id: string,
    private name: string,
    private price: string,
    private qtyStock: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getPrice = () => {
    return this.price;
  };

  public getQty = () => {
    return this.qtyStock;
  };
}
export default Product;
