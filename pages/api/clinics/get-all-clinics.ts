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
    res.status(200).json(results);
  }

  db.end();
}
