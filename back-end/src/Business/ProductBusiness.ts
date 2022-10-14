import ProductsDatabase from "../Database/ProductsDatabase";
import FieldsEmptyError from "../Errors/FieldsEmptyError";
import dateDB from "../functions/dateDB";
import { InputPurchasesDTO, UserDB } from "../types/userTypes";
import IdGenerator from "../services/IdGenerator";
import Product from "../Model/Product";
import convertDate from "../services/convertDate";

class ProductBusiness {
  constructor(
    private productDatabase: ProductsDatabase,
    private idGenerator: IdGenerator
  ) {}

  public product = async () => {
    const productsDB = await this.productDatabase.getProducts();

    const products = productsDB.map((productDB) => {
      return new Product(
        productDB.id,
        productDB.name,
        productDB.price,
        productDB.qty_stock
      );
    });

    return products;
  };

  public purchases = async (input: InputPurchasesDTO) => {
    const { client, date, purchases } = input;

    if (!client || !date || !purchases) {
      throw new FieldsEmptyError();
    }

    if (client.length < 4) {
      throw new Error(
        "Parâmetro 'nome do cliente' inválido: mínimo de 4 caracteres"
      );
    }

    const id = this.idGenerator.generateId();
    const convertDate = dateDB(date);

    const clientDB: UserDB = {
      id,
      client,
      delivery_date: convertDate,
    };

    const response = await this.productDatabase.savePurcheses(
      clientDB,
      purchases
    );

    return response;
  };

  public getPurchases = async () => {
    const purchasesDB = await this.productDatabase.getPurchases();

    const purchases = purchasesDB.map((item: any) => {
      return {
        client: item.client,
        date: convertDate(item.delivery_date),
        name: item.name,
        price: item.price,
        qtd: item.qtyStock,
      };
    });

    return purchases;
  };
}
export default ProductBusiness;
