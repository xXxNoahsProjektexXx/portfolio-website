import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime-types";

export const dynamic = "force-dynamic";

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> } & Record<string, unknown>
): Promise<Response> {
    const { id } = await context.params;

    if (!id) {
        return NextResponse.json({ error: "Kein Plugin angegeben" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "public", "plugins", id);
    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: "Plugin nicht gefunden" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const mimeType = mime.lookup(id) || "application/octet-stream";

    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": mimeType,
            "Content-Disposition": `attachment; filename="${id}"`,
        },
    });
}
