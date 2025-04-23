import client from "@/lib/db";
import { articles } from "@/lib/model/article";
import { User } from "@/typings/common";

export const getUser = async (slug: string): Promise<any> => {
  try {
    const database = client.db("next_template");
    // Specifying a Schema is always optional, but it enables type hinting on
    // finds and inserts
    // const articles = database.collection<User>("articles");

    // const article = await articles.findOne<User>(
    //   { slug: "the-riders-of-rohan" },
    //   {
    //     sort: { rating: -1 },
    //     projection: { _id: 0, title: 1, excerpt: 1, updateTime: 1, detail: 1 },
    //   }
    // );
    const article = articles.findArticleBySlug(slug);
    return article;
  } catch (error) {
    console.log("mango db error", error);
  }
};
