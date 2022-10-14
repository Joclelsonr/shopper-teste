import { PurchasesDB } from "../Model/Product";

export interface InputPurchasesDTO {
  client: string;
  date: string;
  purchases: {
    id: string;
    name: string;
    price: number;
    qtyStock: number;
  }[];
}

export interface UserDB {
  id: string;
  client: string;
  delivery_date: string;
}
