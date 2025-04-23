import dbConnect from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import Article from "@/models/Articles";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      const post = await Article.findArticleBySlug("the-riders-of-rohan");
      return res.status(200).json({ message: post });
    case "POST":
      // await Article.find({}).setCommonAttribute()
      const aas = await Article.find({});
      // console.log("aa", aa);
      try {
        const docs = await Article.updateMany(
          {
            comments: [],
          },
          { $unset: { test: 1 } }
          // { strict: false } 为什么要加严格模式
        );
        console.log("docs", docs);
      } catch (error) {
        console.log("error", error);
      }
      return res.status(200).json({ message: "this is post" });
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
