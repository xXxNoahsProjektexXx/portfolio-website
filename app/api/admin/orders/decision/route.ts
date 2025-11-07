import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendMail } from "@/lib/mailer";

interface SessionUser { role?: string }

export async function POST(req: Request) {
    const session = (await getServerSession(authConfig)) as { user?: SessionUser };
    if (!session?.user || session.user.role !== "admin")
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

    const { id, decision, message } = await req.json();
    const file = path.join(process.cwd(), "data", "orders.json");
    if (!fs.existsSync(file)) return NextResponse.json({ error: "Keine Daten" });

    const orders = JSON.parse(fs.readFileSync(file, "utf-8"));
    const order = orders.find((o: any) => o.id === id);
    if (!order) return NextResponse.json({ error: "Order not found" });

    order.status = decision;
    fs.writeFileSync(file, JSON.stringify(orders, null, 2));

    // E-Mail an Kunden senden
    const subject =
        decision === "accepted"
            ? "✅ Dein Auftrag wurde angenommen"
            : "❌ Dein Auftrag wurde abgelehnt";

    const text =
        `${order.name},\n\n` +
        `Dein Auftrag („${order.project}“) wurde ${decision === "accepted" ? "angenommen" : "abgelehnt"}.\n\n` +
        `Nachricht vom Admin:\n${message}\n\n` +
        `Beste Grüße,\nNoah Portfolio`;

    await sendMail(order.email, subject, text);

    return NextResponse.json({ success: true });
}
