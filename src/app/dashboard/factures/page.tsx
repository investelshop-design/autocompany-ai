// src/app/dashboard/factures/page.tsx

type InvoiceStatus = "Payée" | "En attente" | "En retard";

type Invoice = {
  id: number;
  number: string;
  client: string;
  amountHt: string;
  amountTtc: string;
  date: string;
  dueDate: string;
  status: InvoiceStatus;
};

const invoices: Invoice[] = [
  {
    id: 1,
    number: "FAC-2025-001",
    client: "Atlas Services",
    amountHt: "10 500 DH",
    amountTtc: "12 500 DH",
    date: "20/11/2025",
    dueDate: "20/12/2025",
    status: "Payée",
  },
  {
    id: 2,
    number: "FAC-2025-002",
    client: "Digital Maroc",
    amountHt: "7 400 DH",
    amountTtc: "8 900 DH",
    date: "25/11/2025",
    dueDate: "25/12/2025",
    status: "En attente",
  },
  {
    id: 3,
    number: "FAC-2025-003",
    client: "Immo Rabat Invest",
    amountHt: "5 400 DH",
    amountTtc: "6 500 DH",
    date: "10/10/2025",
    dueDate: "10/11/2025",
    status: "En retard",
  },
];

function StatusBadge({ status }: { status: InvoiceStatus }) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  if (status === "Payée") {
    return (
      <span className={base + " bg-emerald-100 text-emerald-700"}>
        ● Payée
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
      ● En retard
    </span>
  );
}

export default function FacturesPage() {
  return (
    <div className="space-y-6">
      {/* Header de page */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Factures
          </h1>
          <p className="text-sm text-slate-500">
            Suivi des factures émises, des paiements reçus et des retards.
          </p>
        </div>
        <button className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">
          + Enregistrer une facture
        </button>
      </div>

      {/* Résumé rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500 uppercase">
            Total facturé (TTC)
          </p>
          <p className="text-2xl font-bold mt-2">27 900 DH</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500 uppercase">
            En attente de paiement
          </p>
          <p className="text-2xl font-bold mt-2">8 900 DH</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500 uppercase">
            En retard
          </p>
          <p className="text-2xl font-bold mt-2 text-red-600">
            6 500 DH
          </p>
        </div>
      </div>

      {/* Tableau des factures */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                N° Facture
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Client
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Montant HT
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Montant TTC
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">
                Échéance
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
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="px-4 py-3 font-medium text-slate-900">
                  {invoice.number}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {invoice.client}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {invoice.amountHt}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {invoice.amountTtc}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {invoice.date}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {invoice.dueDate}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Voir
                  </button>
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Marquer payé
                  </button>
                  <button className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100">
                    Relancer
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
