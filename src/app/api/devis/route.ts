// src/app/api/devis/route.ts
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const clientId = Number(body.clientId);
  if (Number.isNaN(clientId)) {
    return new Response("Invalid clientId", { status: 400 });
  }

  const now = new Date();

  const count = await prisma.devis.count();
  const number = `DEV-${now.getFullYear()}-${(count + 1)
    .toString()
    .padStart(3, "0")}`;

  const devis = await prisma.devis.create({
    data: {
      number,
      amountHt: body.amountHt,
      amountTtc: body.amountTtc,
      date: now,
      validity: body.validity ?? "30 jours",
      status: "En attente",
      clientId,
    },
  });

  return Response.json(devis);
}
