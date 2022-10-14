import { Router } from "express";
import ProductBusiness from "../Business/ProductBusiness";
import ProductController from "../Controller/ProductController";
import ProductsDatabase from "../Database/ProductsDatabase";
import IdGenerator from "../services/IdGenerator";

const productRouter = Router();
const productController = new ProductController(
  new ProductBusiness(new ProductsDatabase(), new IdGenerator())
);

productRouter.get("/", productController.products);
productRouter.post("/purchases", productController.purchases);
productRouter.get("/purchases", productController.getPurchases);

export default productRouter;
