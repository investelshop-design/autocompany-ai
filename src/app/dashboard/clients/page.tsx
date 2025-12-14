import { supabase } from "@/lib/supabaseClient";
import ClientTable from "./ClientTable";

export default async function ClientsPage() {
  const { data: clients } = await supabase.from("clients").select("*");

  return <ClientTable clients={clients || []} />;
}
