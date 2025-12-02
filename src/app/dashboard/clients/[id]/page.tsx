// src/app/dashboard/clients/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";

type ClientPageProps = {
  params: {
    id: string;
  };
};

export default async function ClientDetailPage({ params }: ClientPageProps) {
  const clientId = Number(params.id);

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
    include: {
      devis: true,
      invoices: true,
    },
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
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            {client.name}
          </h1>
          <p className="text-sm text-slate-500">
            {client.company} · {client.city}
          </p>
        </div>

        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 self-center">
            Statut : {client.status}
          </span>

          <Link
            href={`/dashboard/devis/nouveau/${client.id}`}
            className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
          >
            + Créer un devis
          </Link>
        </div>
      </div>

      {/* Infos principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2">
          <h2 className="text-sm font-semibold text-slate-800">
            Coordonnées
          </h2>
          <p className="text-sm text-slate-700">
            <span className="font-medium">Email :</span> {client.email}
          </p>
          <p className="text-sm text-slate-700">
            <span className="font-medium">Téléphone :</span> {client.phone}
          </p>
          <p className="text-sm text-slate-700">
            <span className="font-medium">Ville :</span> {client.city}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2">
          <h2 className="text-sm font-semibold text-slate-800">
            Informations système
          </h2>
          <p className="text-sm text-slate-700">
            <span className="font-medium">ID interne :</span> {client.id}
          </p>
          <p className="text-sm text-slate-700">
            <span className="font-medium">Créé le :</span>{" "}
            {client.createdAt.toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>

      {/* Devis & factures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Devis */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">
            Devis
          </h2>
          {client.devis.length === 0 ? (
            <p className="text-sm text-slate-400">
              Aucun devis pour ce client.
            </p>
          ) : (
            <ul className="space-y-2 text-sm">
              {client.devis.map((d) => (
                <li
                  key={d.id}
                  className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0"
                >
                  <div>
                    <p className="font-medium">{d.number}</p>
                    <p className="text-xs text-slate-500">
                      {d.date.toLocaleDateString("fr-FR")} · {d.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {d.amountTtc.toLocaleString("fr-MA", {
                        style: "currency",
                        currency: "MAD",
                      })}
                    </p>
                    <p className="text-xs text-slate-400">
                      Validité : {d.validity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Factures */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">
            Factures
          </h2>
          {client.invoices.length === 0 ? (
            <p className="text-sm text-slate-400">
              Aucune facture pour ce client.
            </p>
          ) : (
            <ul className="space-y-2 text-sm">
              {client.invoices.map((f) => (
                <li
                  key={f.id}
                  className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0"
                >
                  <div>
                    <p className="font-medium">{f.number}</p>
                    <p className="text-xs text-slate-500">
                      {f.date.toLocaleDateString("fr-FR")} · {f.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {f.amountTtc.toLocaleString("fr-MA", {
                        style: "currency",
                        currency: "MAD",
                      })}
                    </p>
                    <p className="text-xs text-slate-400">
                      Échéance :{" "}
                      {f.dueDate.toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
