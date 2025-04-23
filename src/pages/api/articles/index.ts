import dbConnect from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();
  console.log("aaaa");
  switch (method) {
    case "GET":
      return res.status(200).json({ message: "this is get" });
    case "POST":
      return res.status(200).json({ message: "this is post" });
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
