import { connectDB } from "@/services/db";
import { ClinicData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  const { CodCli, CodMed } = req.query;

  if (req.method === "DELETE") {
    try {
      const results = await db.execute(
       `DELETE FROM clinicaMedico 
        WHERE clinicaMedico.CodCli = '${CodCli}'
        AND clinicaMedico.CodMed = '${CodMed}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      console.log("🚀 ~ file: clinics.ts:30 ~ error:", error);
      res.status(500).json({ message: "failed" });
    }
  }
}
