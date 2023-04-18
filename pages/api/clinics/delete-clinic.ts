import { connectDB } from "@/services/db";
import { ClinicData } from "@/declaration";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();

  const CodCli = req.query.id;

  if (req.method === "DELETE") {
    try {
      const results = await db.execute(
        `DELETE FROM Clinica WHERE CodCli = '${CodCli}'`
      );
      res.status(200).json({ message: "success" });
    } catch (error: any) {
      res.status(500).json({ message: "failed" });
    }
  }
}
