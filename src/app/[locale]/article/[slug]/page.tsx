import React from "react";
import { Button } from "antd";
import { getUser } from "@/app/api/user/api";
import Container from "@/components/Container";
import distanceToNow from "@/lib/dateRelative";
import dbConnect from "@/lib/db";
import Article from "@/models/Articles";

type PageProps = {
  slug: string;
};

const Page = async ({ slug }: PageProps) => {
  await dbConnect();
  const post = await Article.findArticleBySlug("the-riders-of-rohan");

  if(!post){
    return <div>not find</div>
  }
  return (
    <Container>
      {/* <Head>
    <title>{post.title} | My awesome blog</title>
  </Head> */}

      {/* todo loading */}
      <div>
        <article>
          <header>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            {post.excerpt ? (
              <p className="mt-2 text-xl">{post.excerpt}</p>
            ) : null}
            <time className="flex mt-2 text-gray-400">
              {distanceToNow(new Date(post.updateTime))}
            </time>
          </header>

          <div
            className="prose mt-10"
            dangerouslySetInnerHTML={{ __html: post.detail }}
          />
        </article>

        {/* <Comment /> */}
      </div>
    </Container>
  );
};

export default Page;
