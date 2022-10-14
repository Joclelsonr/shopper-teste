import { ProductDB } from "../Model/Product";
import { UserDB } from "../types/userTypes";
import BaseDataBase from "./BaseDatabase";

class ProductsDatabase extends BaseDataBase {
  public static TABLE_USERS = "users";
  public static TABLE_PRODUCT = "products";
  public static TABLE_PURCHASES = "purcheses";

  public getProducts = async (): Promise<ProductDB[]> => {
    const result: ProductDB[] = await this.getConnection()
      .select()
      .from(ProductsDatabase.TABLE_PRODUCT);

    return result;
  };

  public savePurcheses = async (
    client: UserDB,
    purchases: {
      id: string;
      name: string;
      price: number;
      qtyStock: number;
    }[]
  ): Promise<string> => {
    const purchasesDB = purchases.map((item) => {
      return {
        id: item.id,
        product_name: item.name,
        price: item.price,
        qty_stock: item.qtyStock,
      };
    });

    await this.getConnection()
      .insert(client)
      .into(ProductsDatabase.TABLE_USERS);

    await this.getConnection()
      .insert(purchases)
      .into(ProductsDatabase.TABLE_PURCHASES);

    for (let item of purchasesDB) {
      await this.getConnection().raw(
        `UPDATE products SET qty_stock = qty_stock - "${item.qty_stock}" WHERE id = "${item.id}";`
      );
    }

    return `Compra efetuada com sucesso!`;
  };

  public getPurchases = async () => {
    const result = await this.getConnection().raw(`
        SELECT 
        users.client, users.delivery_date, 
        purcheses.name, purcheses.price, purcheses.qtyStock
        FROM users, purcheses;
      `);

    return result[0];
  };
}
export default ProductsDatabase;
