import { connectDB } from "@/services/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();
  const [results] = await db.execute("SELECT * FROM clinica");

  res.status(200).json(results);
}
