import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Article } from "@/types";

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4 flex flex-col" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src="https://cdn.pixabay.com/photo/2025/07/20/08/07/alley-9723861_1280.jpg"
              alt=""
              width={660}
              height={100}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-700"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">{article.createdAt}</p>
            <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
              {article.content}
            </Link>
            <Link href={`articles/${article.id}`} className="hover:text-black text-pink-800">
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};
