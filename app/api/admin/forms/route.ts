import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { getAllData } from "@/lib/db";
import { NextResponse } from "next/server";

interface SessionUser {
    name?: string;
    email?: string;
    image?: string;
    role?: string;
}

interface CustomSession {
    user?: SessionUser;
}

export async function GET() {
    // Typ explizit setzen
    const session = (await getServerSession(authConfig)) as CustomSession;

    if (!session?.user || session.user.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const data = await getAllData();
    return NextResponse.json(data);
}
