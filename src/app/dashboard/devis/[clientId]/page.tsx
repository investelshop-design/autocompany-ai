import { supabase } from "@/lib/supabaseClient";
import NewDevisForm from "./NewDevisForm";

export default async function Page({ params }: { params: { clientId: string } }) {
  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", params.clientId)
    .single();

  return <NewDevisForm client={client} />;
}
