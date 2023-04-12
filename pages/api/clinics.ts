import { connectDB } from "@/services/db";
import { ClinicData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();
  const { CodCli, NomeCli, Endereco, Telefone, Email } = req.body as ClinicData;

  if (req.method === "GET") {
    const [results] = await db.query("SELECT * FROM clinica");
    res.status(200).json(results);
  }

  if (req.method === "POST") {
    try {
      const results = await db.query(
        `INSERT INTO Clinica (CodCli, NomeCli, Endereco, Telefone, Email) VALUES (${CodCli}, '${NomeCli}', '${Endereco}', '${Telefone}', '${Email}')`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  if (req.method === "PUT") {
    const { CodCli, NomeCli, Endereco, Telefone, Email } =
      req.body as ClinicData;

    try {
      const results = await db.query(
        `UPDATE Clinica SET NomeCli='${NomeCli}', Endereco='${Endereco}', Telefone='${Telefone}', Email='${Email}' WHERE CodCli = '${CodCli}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  if (req.method === "DELETE") {
    const { CodCli } = req.body as ClinicData;
    console.log("🚀 ~ file: clinics.ts:47 ~  req.body:",  req.body)
    

    try {
      const results = await db.execute(
        `DELETE FROM Clinica WHERE CodCli = '${CodCli}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  db.end();
}
