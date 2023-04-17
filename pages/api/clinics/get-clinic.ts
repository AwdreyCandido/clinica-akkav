import { connectDB } from "@/services/db";
import { ClinicData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  const { CodCli } = req.body;

  if (req.method === "POST") {
    const [clinic] = await db.query(
      `SELECT * FROM clinica WHERE CodCli = '${CodCli}'` // 'C000002'
    );

    const [doctors] = await db.query(
      `SELECT medico.CodMed, medico.NomeMed, medico.Genero, medico.Telefone, medico.Email, especialidade.NomeEspec
      FROM clinica
      JOIN clinicaMedico ON clinica.codcli = clinicaMedico.codcli
      JOIN medico ON clinicaMedico.codmed = medico.codmed
      JOIN especialidade ON medico.codespec = especialidade.codespec
      WHERE clinica.codcli = '${CodCli}'`
    );

    res.status(200).json({ clinic, doctors });
  }

  db.end();
}
