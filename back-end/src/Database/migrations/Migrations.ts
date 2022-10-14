import BaseDataBase from "../BaseDatabase";
import ProductsDatabase from "../ProductsDatabase";
import results from "./parserCSV";

class Migrations extends BaseDataBase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error: any) {
      console.log("FAILED! Error in migrations...");
      console.log(error.message);
    } finally {
      console.log("Ending connection...");
      this.getConnection().destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await this.getConnection().raw(`
            DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_PRODUCT};
            
            CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_PRODUCT}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price VARCHAR(255) NOT NULL,
                qty_stock VARCHAR(255) NOT NULL
            );
            `);
  };

  insertData = async () => {
    await this.getConnection()
      .insert(results)
      .into(ProductsDatabase.TABLE_PRODUCT);
  };
}

const migrations = new Migrations();
migrations.execute();
