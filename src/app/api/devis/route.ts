import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const data = await req.json();

  const { error } = await supabase.from("devis").insert(data);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
