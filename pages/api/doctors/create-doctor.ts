import { connectDB } from "@/services/db";
import { ClinicData, DoctorData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";
import { getActualDate } from "@/services/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();
  const { CodMed, NomeMed, Genero, Telefone, Email, CodCli, CodEspec } =
    req.body as DoctorData;

  if (req.method === "POST") {
    try {
      await db.query(
        `INSERT INTO Medico (CodMed, NomeMed, Genero, Telefone, Email, CodEspec) VALUES (${CodMed}, '${NomeMed}', '${Genero}', '${Telefone}', '${Email}', '${CodEspec}')`
      );

      if (CodCli) {
        await db.query(
          `INSERT INTO ClinicaMedico (CodCli, CodMed, DataIngresso) VALUES ('${CodCli}', '${CodMed}', '${getActualDate()}')`
        );
      }

      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }

  db.end();
}
