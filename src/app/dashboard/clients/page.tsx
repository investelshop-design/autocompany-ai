import { prisma } from "@/lib/prisma";
import ClientTable from "./ClientTable";

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({
    orderBy: { id: "desc" },
  });

  return <ClientTable initialClients={clients} />;
}
