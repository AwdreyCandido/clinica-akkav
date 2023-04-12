import mysql from "mysql2/promise";

export async function connectDB() {
  const db: mysql.Connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "clinicas_medicas",
  });

  return db;
}
