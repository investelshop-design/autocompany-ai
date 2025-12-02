// src/app/dashboard/page.tsx
export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Cartes de stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <p className="text-xs text-slate-500 uppercase">Clients actifs</p>
          <h2 className="text-2xl font-bold mt-2">37</h2>
          <p className="text-xs text-emerald-500 mt-1">+5 ce mois</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <p className="text-xs text-slate-500 uppercase">Devis en attente</p>
          <h2 className="text-2xl font-bold mt-2">12</h2>
          <p className="text-xs text-orange-500 mt-1">6 à relancer</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <p className="text-xs text-slate-500 uppercase">Factures impayées</p>
          <h2 className="text-2xl font-bold mt-2">4</h2>
          <p className="text-xs text-red-500 mt-1">27 300 DH</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <p className="text-xs text-slate-500 uppercase">Prochaine échéance</p>
          <h2 className="text-xl font-bold mt-2">03/12/2025</h2>
          <p className="text-xs text-slate-400 mt-1">Facture #FAC-2025-004</p>
        </div>
      </div>

      {/* Activités + actions rapides */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Activités récentes */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between">
            <h3 className="font-semibold text-slate-800">
              Activités récentes
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="px-6 py-4 flex justify-between">
              <div>
                <p className="font-medium">Facture #FAC-2025-001</p>
                <p className="text-sm text-slate-500">
                  Société Atlas Services
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">12 500 DH</p>
                <p className="text-xs text-green-500">Payée</p>
              </div>
            </div>

            <div className="px-6 py-4 flex justify-between">
              <div>
                <p className="font-medium">Devis #DEV-2025-014</p>
                <p className="text-sm text-slate-500">Digital Maroc</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">8 900 DH</p>
                <p className="text-xs text-orange-500">En attente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
          <h3 className="font-semibold text-slate-800">Actions rapides</h3>
          <button className="w-full px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">
            + Ajouter un client
          </button>
          <button className="w-full px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">
            + Créer un devis
          </button>
          <button className="w-full px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">
            + Enregistrer une facture
          </button>
          <button className="w-full px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">
            Voir les factures en retard
          </button>
        </div>
      </div>
    </div>
  );
}
