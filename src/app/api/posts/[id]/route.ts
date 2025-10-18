import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error } = await supabase.from("posts1").select("*").eq("id", id).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json(data, { status: 200 });
}
