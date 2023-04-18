import { connectDB } from "@/services/db";
import { ClinicData, DoctorData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  const { CodMed } = req.body as DoctorData;

  if (req.method === "POST") {
    const [doctor] = await db.query(
      `SELECT * FROM Medico
      JOIN especialidade ON Medico.CodEspec = Especialidade.CodEspec
      WHERE CodMed = '${CodMed}'`
    );

    const [pacients] = await db.query(
      `   
      SELECT 
	        AgendaConsulta.Data_Hora, 
          Paciente.CpfPaciente, 
          Paciente.NomePac, 
          Paciente.DataNascimento, 
          Paciente.Genero, 
          Paciente.Telefone,
          Paciente.Email
      FROM Medico
      JOIN AgendaConsulta ON Medico.codmed = AgendaConsulta.codmed
      JOIN Paciente ON AgendaConsulta.CpfPaciente = Paciente.CpfPaciente
      WHERE Medico.codmed = '${CodMed}'`
    );

    res.status(200).json({ doctor, pacients });
  }

  db.end();
}
