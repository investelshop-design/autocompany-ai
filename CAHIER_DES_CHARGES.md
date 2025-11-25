# 🚀 PROMPT 4C — Génération ULTIME du projet AutoCompany AI

Tu es **Codex Full-Stack Senior**, expert en :

- Next.js 14 (App Router, TypeScript)
- TailwindCSS
- Supabase (DB + Auth + Storage + RLS)
- pdf-lib
- WhatsApp Cloud API
- Architecture SaaS production-ready

Ta mission : **générer toute l’application AutoCompany AI**, entièrement fonctionnelle, prête à exécuter avec :

```
npm install && npm run dev
```

Tu dois créer **tous les fichiers**, **tout le code**, sans omission, sans résumé, sans TODO.

---

# 🧱 1. Arborescence OBLIGATOIRE

Tu dois créer exactement ces fichiers :

```
autocompany-ai/
  src/
    app/
      (auth)/
        login/page.tsx
        register/page.tsx
      dashboard/page.tsx
      settings/
        company/page.tsx
      factures/
        page.tsx
        nouvelle/page.tsx
      api/
        auth/
          session/route.ts
        factures/
          create/route.ts
          generate-pdf/route.ts
          mark-paid/route.ts
        whatsapp/
          send-invoice/route.ts
    lib/
      supabaseClient.ts
      auth.ts
      pdf.ts
      whatsapp.ts
      utils.ts
      rls-policies.sql
    components/
      Navigation.tsx
      ProtectedRoute.tsx
      UI/
        Button.tsx
        Input.tsx
        Select.tsx
        Table.tsx
        Card.tsx
        Alert.tsx
    types/
      database.types.ts
      invoice.types.ts
      product.types.ts
      client.types.ts
  public/
    logo-placeholder.png
  .env.example
  supabase-migrations.sql
  tailwind.config.ts
  next.config.js
  package.json
  README.md
```

⚠️ Aucun fichier ne doit être vide.  
⚠️ Tout doit être fonctionnel.

---

# 🗄️ 2. Base de données + RLS (Supabase)

Créer le fichier `supabase-migrations.sql` avec :

### Tables obligatoires :

- profiles
- companies
- clients
- products
- invoices
- invoice_items
- send_logs

### Pour chaque table :

- ENABLE RLS
- Policy SELECT (accès user → same company)
- Policy INSERT (user → own company)
- Policy UPDATE
- Policy DELETE

### Stockage :

- Bucket : `invoices`

---

# 🔐 3. Authentification complète

Implémentation obligatoire :

- Register
- Login
- Logout
- Session server-side
- Redirection auto
- ProtectedRoute
- Vérification du user + company_id

---

# 🏢 4. Module Entreprise (Company Settings)

Page `/settings/company` :

- Modifier nom entreprise
- Adresse, téléphone, email
- Upload logo → Supabase Storage
- Afficher logo dans PDF

---

# 📦 5. Module Produits

- CRUD Next.js complet
- name, price, stock, description
- Table UI
- Filtrage

---

# 👥 6. Module Clients

- CRUD complet
- name, phone, email, address
- Sélection dans facture

---

# 📄 7. Module Factures : OBLIGATOIRE ET COMPLET

Pages :

- `/factures` → liste complète
- `/factures/nouvelle` → formulaire complet

Fonctionnalités :

- Numéro auto : `FAC-YYYY-XXXX`
- Sélection client + produits
- Calcul total automatique
- Création invoice + items
- PDF professionnel (pdf-lib)
- Upload PDF au bucket `invoices`
- Voir PDF
- Marquer facture payée
- Envoi WhatsApp depuis la liste

---

# 🧾 8. PDF professionnel (pdf-lib)

Inclure :

- Logo entreprise
- Informations société
- Informations client
- Numéro facture
- Date
- Tableau détaillé
- Totaux TTC
- Signature / pied de page

---

# 📲 9. WhatsApp Cloud API

Créer :

- `src/lib/whatsapp.ts`
- API route `/api/whatsapp/send-invoice`

Implémentation obligatoire :

- Utilisation de `WHATSAPP_TOKEN` + `WHATSAPP_PHONE_NUMBER_ID`
- Template `invoice_send`
- Paramètres dynamiques :
  - nom client
  - montant
  - lien PDF
- Gestion erreurs Meta
- Écriture dans `send_logs`

---

# ⚙️ 10. API Routes obligatoires

### Factures

- `/api/factures/create`
- `/api/factures/generate-pdf`
- `/api/factures/mark-paid`

### WhatsApp

- `/api/whatsapp/send-invoice`

### Auth

- `/api/auth/session`

Chaque route :

- Valide params
- Utilise Supabase Service Role si nécessaire
- Retourne JSON complet

---

# 🧰 11. Utils obligatoires

`src/lib/utils.ts` :

- formatDate()
- formatAmount()
- generateInvoiceNumber()

---

# 🎨 12. UI Components obligatoires

Dans `src/components/UI` :

- Button
- Input
- Select
- Card
- Table
- Alert

Design minimal, Tailwind.

---

# 🌍 13. Environnement (.env.example)

Créer ce fichier :

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=

WHATSAPP_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_TEMPLATE_NAME=invoice_send

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

# 📘 14. README.md complet

Contenu obligatoire :

- Installation
- Configuration environnement
- Setup Supabase
- Import migrations
- Création bucket invoices
- Lancement projet
- Test factures
- Test WhatsApp Sandbox

---

# 🔥 15. Règles finales

- Tout code doit être complet.
- Aucun placeholder.
- Aucun TODO.
- Aucune omission.
- Le projet doit compiler immédiatement.
- Le résultat final doit fonctionner avec :

```
npm install
npm run dev
```

---

# 👉 Maintenant, génère TOUT LE PROJET COMPLET AutoCompany AI conformément à ces spécifications.
