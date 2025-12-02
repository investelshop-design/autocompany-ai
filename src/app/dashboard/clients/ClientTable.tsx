"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type Client = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  status: string;
};

export default function ClientTable({ initialClients }: { initialClients: Client[] }) {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    status: "Actif",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const newClient: Client = await res.json();
    setClients([newClient, ...clients]);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      status: "Actif",
    });

    setShowForm(false);
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Clients</h1>
          <p className="text-sm text-slate-500">Liste des clients enregistrés</p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg"
        >
          {showForm ? "Fermer" : "+ Ajouter un client"}
        </button>
      </div>

      {/* FORMULAIRE */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            required
            className="border p-2 rounded"
            placeholder="Nom complet"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            required
            className="border p-2 rounded"
            placeholder="Société"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />

          <input
            required
            type="email"
            className="border p-2 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            required
            className="border p-2 rounded"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <input
            required
            className="border p-2 rounded"
            placeholder="Ville"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />

          <select
            className="border p-2 rounded"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option>Actif</option>
            <option>Prospect</option>
            <option>En retard</option>
          </select>

          <div className="md:col-span-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border rounded-lg"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg"
            >
              Enregistrer
            </button>
          </div>
        </form>
      )}

      {/* TABLEAU */}
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-xs uppercase text-slate-600">
            <tr>
              <th className="p-2 text-left">Nom</th>
              <th className="p-2 text-left">Société</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Ville</th>
              <th className="p-2 text-left">Statut</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b hover:bg-slate-50">
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.company}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.city}</td>
                <td className="p-2">{c.status}</td>

                <td className="p-2 text-right">
                  <Link
                    href={`/dashboard/clients/${c.id}`}
                    className="text-xs px-3 py-1 rounded-lg border border-slate-300 hover:bg-slate-100"
                  >
                    Voir
                  </Link>
                </td>
              </tr>
            ))}

            {clients.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-slate-400">
                  Aucun client trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
