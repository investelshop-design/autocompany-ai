"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewDevisForm({
  clientId,
  clientName,
}: {
  clientId: number;
  clientName: string;
}) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    amountHt: "",
    amountTtc: "",
    validity: "30 jours",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/devis", {
      method: "POST",
      body: JSON.stringify({
        clientId,
        amountHt: Number(formData.amountHt),
        amountTtc: Number(formData.amountTtc),
        validity: formData.validity,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Erreur lors de la création du devis.");
      return;
    }

    // Après création → retour à la fiche client
    router.push(`/dashboard/clients/${clientId}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 max-w-xl"
    >
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Client
        </label>
        <div className="text-sm font-medium text-slate-900">
          {clientName}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Montant HT (en DH)
        </label>
        <input
          type="number"
          required
          value={formData.amountHt}
          onChange={(e) =>
            setFormData({ ...formData, amountHt: e.target.value })
          }
          className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ex : 7500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Montant TTC (en DH)
        </label>
        <input
          type="number"
          required
          value={formData.amountTtc}
          onChange={(e) =>
            setFormData({ ...formData, amountTtc: e.target.value })
          }
          className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ex : 9000"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Validité du devis
        </label>
        <input
          type="text"
          required
          value={formData.validity}
          onChange={(e) =>
            setFormData({ ...formData, validity: e.target.value })
          }
          className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ex : 30 jours"
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-60"
        >
          {loading ? "Création..." : "Créer le devis"}
        </button>
      </div>
    </form>
  );
}
