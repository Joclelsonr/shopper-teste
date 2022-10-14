import app from "./app";
import productRouter from "./router/productRouter";

app.use("/products", productRouter);
