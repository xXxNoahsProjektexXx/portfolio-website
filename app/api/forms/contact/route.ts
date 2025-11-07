import { NextResponse } from "next/server";
import { saveForm } from "@/lib/localdb";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    if (!name || !email || !message)
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await saveForm("contacts", { name, email, message });
    return NextResponse.json({ success: true });
}
