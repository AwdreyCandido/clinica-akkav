import { connectDB } from "@/services/db";
import { ClinicData, DoctorData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  const { CodMed, NomeMed, Genero, Telefone, Email, CodEspec } =
    req.body as DoctorData;

  if (req.method === "PUT") {
    try {
      const results = await db.query(
        `UPDATE Medico SET NomeMed='${NomeMed}', Genero='${Genero}', Telefone='${Telefone}', Email='${Email}', CodEspec='${CodEspec}' WHERE CodMed = '${CodMed}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      res.status(500).json({ message: "failed" });
    }
  }

  db.end();
}
