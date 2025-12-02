// src/app/dashboard/devis/page.tsx

type DevisStatus = "En attente" | "Accepté" | "Refusé";

type Devis = {
  id: number;
  number: string;
  client: string;
  amount: string;
  date: string;
  validity: string;
  status: DevisStatus;
};

const devisList: Devis[] = [
  {
    id: 1,
    number: "DEV-2025-014",
    client: "Digital Maroc",
    amount: "8 900 DH",
    date: "28/11/2025",
    validity: "15 jours",
    status: "En attente",
  },
  {
    id: 2,
    number: "DEV-2025-013",
    client: "Atlas Services",
    amount: "12 300 DH",
    date: "25/11/2025",
    validity: "30 jours",
    status: "Accepté",
  },
  {
    id: 3,
    number: "DEV-2025-012",
    client: "Immo Rabat Invest",
    amount: "6 500 DH",
    date: "20/11/2025",
    validity: "30 jours",
    status: "Refusé",
  },
];

function StatusBadge({ status }: { status: DevisStatus }) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  if (status === "Accepté") {
    return (
      <span className={base + " bg-emerald-100 text-emerald-700"}>
        ● Accepté
      </span>
    );
  }

  if (status === "En attente") {
    return (
      <span className={base + " bg-orange-100 text-orange-700"}>
        ● En attente
      </span>
    );
  }

  return (
    <span className={base + " bg-red-100 text-red-700"}>
      ● Refusé
    </span>
  );
}

export default function DevisPage() {
  return (
    <div className="space-y-6">
      {/* Header de page */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Devis
          </h1>
          <p className="text-sm text-slate-500">
            Suivi des devis envoyés à vos clients et de leur statut.
          </p>
        </div>
        <button className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">
          + Créer un devis
        </button>
      </div>

      {/* Tableau des devis */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                N° Devis
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Client
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Montant
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Validité
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Statut
              </th>
              <th className="px-4 py-2 text-right text-xs font-semibold text-slate-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {devisList.map((devis) => (
              <tr
                key={devis.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="px-4 py-3 font-medium text-slate-900">
                  {devis.number}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {devis.client}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {devis.amount}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {devis.date}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {devis.validity}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={devis.status} />
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Voir
                  </button>
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Dupliquer
                  </button>
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Exporter PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
