import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });

  throw new Error("エラー発生");

  const articles = await res.json();
  return articles;
};
