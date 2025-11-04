import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime-types"; // installiere falls noch nicht vorhanden: npm i mime-types

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const fileName = params.id;
        const pluginPath = path.join(process.cwd(), "public", "plugins", fileName);

        if (!fs.existsSync(pluginPath)) {
            return NextResponse.json({ error: "Plugin nicht gefunden" }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(pluginPath);
        const mimeType = mime.lookup(fileName) || "application/octet-stream";

        // 🔢 Optional: Download-Logging (z. B. in data/downloads.json)
        const logPath = path.join(process.cwd(), "data", "downloads.json");
        const logs = fs.existsSync(logPath)
            ? JSON.parse(fs.readFileSync(logPath, "utf-8"))
            : {};

        logs[fileName] = (logs[fileName] || 0) + 1;
        fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
        fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));

        // 📦 Datei ausliefern
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": mimeType,
                "Content-Disposition": `attachment; filename="${fileName}"`,
            },
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Fehler beim Download" }, { status: 500 });
    }
}
