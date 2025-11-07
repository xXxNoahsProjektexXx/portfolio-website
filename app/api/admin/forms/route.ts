import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { readForms } from "@/lib/localdb";
import { NextResponse } from "next/server";

interface SessionUser {
    role?: string;
}

export async function GET() {
    const session = (await getServerSession(authConfig)) as { user?: SessionUser };

    if (!session?.user || session.user.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const data = await readForms();
    return NextResponse.json(data);
}
