import { auth } from "@/lib/auth";
import { getAllData } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const data = await getAllData();
    return NextResponse.json(data);
}
