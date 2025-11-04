import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime-types"; // npm i mime-types

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        // ⬇️ params async entpacken
        const { id } = await context.params;
        if (!id) {
            return NextResponse.json({ error: "Kein Plugin angegeben" }, { status: 400 });
        }

        const fileName = id;
        const pluginPath = path.join(process.cwd(), "public", "plugins", fileName);

        if (!fs.existsSync(pluginPath)) {
            return NextResponse.json({ error: "Plugin nicht gefunden" }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(pluginPath);
        const mimeType = mime.lookup(fileName) || "application/octet-stream";

        // Optional: Download Logging
        const logDir = path.join(process.cwd(), "data");
        const logFile = path.join(logDir, "downloads.json");
        fs.mkdirSync(logDir, { recursive: true });
        const logs = fs.existsSync(logFile)
            ? JSON.parse(fs.readFileSync(logFile, "utf-8"))
            : {};
        logs[fileName] = (logs[fileName] || 0) + 1;
        fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

        // Datei senden
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": mimeType,
                "Content-Disposition": `attachment; filename="${fileName}"`,
            },
        });
    } catch (err) {
        console.error("Download error:", err);
        return NextResponse.json({ error: "Fehler beim Download" }, { status: 500 });
    }
}
