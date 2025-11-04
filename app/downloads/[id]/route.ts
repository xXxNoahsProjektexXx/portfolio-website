import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime-types";

export const dynamic = "force-dynamic"; // (optional, falls du Caching vermeiden willst)

export async function GET(req, context) {
    try {
        // params-Promise manuell entpacken
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

        // optional: Logging
        const logDir = path.join(process.cwd(), "data");
        fs.mkdirSync(logDir, { recursive: true });
        const logFile = path.join(logDir, "downloads.json");
        const logs = fs.existsSync(logFile)
            ? JSON.parse(fs.readFileSync(logFile, "utf-8"))
            : {};
        logs[id] = (logs[id] || 0) + 1;
        fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": mimeType,
                "Content-Disposition": `attachment; filename="${id}"`,
            },
        });
    } catch (err) {
        console.error("Download error:", err);
        return NextResponse.json({ error: "Fehler beim Download" }, { status: 500 });
    }
}
