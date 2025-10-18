import { notFound } from "next/navigation";
import { Article } from "./types";
import { supabase } from "./utils/supabaseClient";

export const getAllArticles = async (): Promise<Article[]> => {
  const { data, error } = await supabase
    .from("posts1")
    .select("*")
    .order("created_At", { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const { data, error } = await supabase
    .from("posts1")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  if (!data) notFound();

  return data;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const { data, error } = await supabase
    .from("posts1")
    .insert([{ id, title, content, created_At: currentDatetime }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const { data, error } = await supabase
    .from("posts1")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};
