// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-lg w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard AutoCompany AI</h1>
        <p className="text-slate-700">
          Félicitations 🎉 ! Cette page <strong>/dashboard</strong> fonctionne.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Ensuite, on pourra brancher les vraies données (clients, factures,
          produits...) mais pour l&apos;instant l’objectif est de vérifier que le
          routing Next.js marche bien.
        </p>
      </div>
    </main>
  );
}
