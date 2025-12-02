// src/app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-6 py-4 border-b border-slate-800">
          <h1 className="text-xl font-bold tracking-tight">
            AutoCompany <span className="text-emerald-400">AI</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Tableau de bord intelligent
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <a
            href="/dashboard"
            className="flex items-center px-3 py-2 rounded-lg bg-slate-800 text-white font-medium"
          >
            📊 Tableau de bord
          </a>
          <a
            href="/dashboard/clients"
            className="flex items-center px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            👥 Clients
          </a>
          <a
            href="/dashboard/devis"
            className="flex items-center px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            📄 Devis
          </a>
          <a
            href="/dashboard/factures"
            className="flex items-center px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            💰 Factures
          </a>
          <a
            href="/dashboard/rh"
            className="flex items-center px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            🧑‍💼 RH & Paie
          </a>
        </nav>

        <div className="px-4 py-3 border-t border-slate-800 text-xs text-slate-400">
          Connecté en tant que <span className="text-white">Investel</span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="px-8 py-4 border-b border-slate-200 bg-white flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Tableau de bord
            </h2>
            <p className="text-sm text-slate-500">
              Vue générale de votre entreprise.
            </p>
          </div>

          <button className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">
            + Nouveau devis
          </button>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
