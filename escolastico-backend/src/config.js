import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_USER || "sqlserver",
  dbPassword: process.env.DB_PASSWORD || "root",
  dbServer: process.env.DB_SERVER || "localhost",
  dbDatabase: process.env.DB_NAME || "db_escolastico",
};
