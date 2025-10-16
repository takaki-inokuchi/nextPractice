import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React, { use } from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const detailArticle = await getDetailArticle(id);
  console.log("detailArticle:", detailArticle);
  console.log("detailArticle.id:", detailArticle.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/id/${detailArticle.id}/600/400`}
        alt=""
        width={660}
        height={400}
      />
      <h1 className="text-center text-4xl mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        {detailArticle.content}
      </div>
    </div>
  );
};

export default Article;
