import { connectDB } from "@/services/db";
import { ClinicData, DoctorData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();
  const { CodMed, NomeMed, Genero, Telefone, Email } = req.body as DoctorData;

  if (req.method === "GET") {
    const [results] = await db.query("SELECT * FROM Medico");
    res.status(200).json(results);
  }

  if (req.method === "POST") {
    try {
      const results = await db.query(
        `INSERT INTO Medico (CodMed, NomeMed, Genero, Telefone, Email) VALUES (${CodMed}, '${NomeMed}', '${Genero}', '${Telefone}', '${Email}')`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  if (req.method === "PUT") {
    const { CodMed, NomeMed, Genero, Telefone, Email } = req.body as DoctorData;

    try {
      const results = await db.query(
        `UPDATE Clinica SET NomeMed='${NomeMed}', Genero='${Genero}', Telefone='${Telefone}', Email='${Email}' WHERE CodCli = '${CodMed}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  db.end();
}
