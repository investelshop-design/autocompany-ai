// src/app/dashboard/devis/nouveau/[clientId]/page.tsx
import { prisma } from "@/lib/prisma";
import NewDevisForm from "./NewDevisForm";

type PageProps = {
  params: {
    clientId: string;
  };
};

export default async function NewDevisPage({ params }: PageProps) {
  const clientId = Number(params.clientId);

  if (Number.isNaN(clientId)) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-red-600">
          ID client invalide.
        </h1>
      </div>
    );
  }

  const client = await prisma.client.findUnique({
    where: { id: clientId },
  });

  if (!client) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-slate-900">
          Client introuvable
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Aucun client avec l&apos;ID {clientId} n&apos;a été trouvé.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          Nouveau devis
        </h1>
        <p className="text-sm text-slate-500">
          Client : <span className="font-medium">{client.name}</span> ·{" "}
          {client.company}
        </p>
      </div>

      <NewDevisForm clientId={client.id} clientName={client.name} />
    </div>
  );
}
