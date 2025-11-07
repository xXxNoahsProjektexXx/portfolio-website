import { NextResponse } from "next/server";
import { insertOrder } from "@/lib/db";

export async function POST(req: Request) {
    const { name, email, project, budget, details } = await req.json();
    if (!name || !email || !project || !details)
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await insertOrder(name, email, project, budget, details);
    return NextResponse.json({ success: true });
}
