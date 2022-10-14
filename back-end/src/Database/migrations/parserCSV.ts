import { ProductDB } from "../../Model/Product";

import csv from "csv-parser";
import fs from "fs";

const results: ProductDB[] = [];

fs.createReadStream("./src/DataBase/migrations/products.csv")
  .pipe(csv({}))
  .on("data", (data: any) => {
    results.push(data);
  });

export default results;
