import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_USER, DB_PORT, DB_PASSWORD } from "../config.js";

export const pool = await createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE
});
