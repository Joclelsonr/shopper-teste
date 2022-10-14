import { Request, Response } from "express";
import ProductBusiness from "../Business/ProductBusiness";
import { InputPurchasesDTO } from "../types/userTypes";

class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public products = async (req: Request, res: Response) => {
    try {
      const response = await this.productBusiness.product();

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  public purchases = async (req: Request, res: Response) => {
    try {
      const { client, date } = req.body.form;
      const purchases = req.body.cart;

      const input: InputPurchasesDTO = {
        client,
        date,
        purchases,
      };

      const response = await this.productBusiness.purchases(input);

      res.status(201).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  public getPurchases = async (req: Request, res: Response) => {
    try {
      const response = await this.productBusiness.getPurchases();

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}
export default ProductController;
