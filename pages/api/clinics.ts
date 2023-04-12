import { connectDB } from "@/services/db";
import { ClinicData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  if (req.method === "GET") {
    const [results] = await db.query("SELECT * FROM clinica");
    db.end();
    res.status(200).json(results);
  }

  if (req.method === "POST") {
    const { CodCli, NomeCli, Endereco, Telefone, Email } =
      req.body as ClinicData;

    try {
      const results = await db.query(
        `INSERT INTO Clinica (CodCli, NomeCli, Endereco, Telefone, Email) VALUES (${CodCli}, '${NomeCli}', '${Endereco}', '${Telefone}', '${Email}')`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }

    db.end();
  }
}
