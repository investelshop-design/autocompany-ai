import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

type ClientPageProps = {
  params: { id: string };
};

export default async function ClientPage({ params }: ClientPageProps) {
  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!client) return <p>Client introuvable.</p>;

  return (
    <div>
      <h1>{client.nom}</h1>
      <p>{client.email}</p>
      <Link href="/dashboard/clients">Retour</Link>
    </div>
  );
}
