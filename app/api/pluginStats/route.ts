import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const pluginId = searchParams.get("pluginId");
    const type = searchParams.get("type"); // "spigot" | "pmmp"

    if (!pluginId || !type) {
        return NextResponse.json({ error: "pluginId and type are required" }, { status: 400 });
    }

    try {
        let data: any = {};

        if (type === "spigot") {
            const res = await fetch(`https://api.spiget.org/v2/resources/${pluginId}`);
            if (!res.ok) throw new Error("Spiget API error");
            const spiget = await res.json();
            data = {
                id: spiget.id,
                name: spiget.name,
                downloads: spiget.downloads,
                rating: spiget.rating?.average ?? 0,
                author: spiget.author?.name ?? "Unbekannt",
                updates: spiget.updateDate,
            };
        } else if (type === "pmmp") {
            const res = await fetch(`https://poggit.pmmp.io/releases.json?name=${pluginId}`);
            if (!res.ok) throw new Error("Poggit API error");
            const poggit = await res.json();
            data = {
                plugin: pluginId,
                releases: poggit.length,
                lastRelease: poggit[0]?.version ?? "Unbekannt",
                totalDownloads: poggit.reduce((acc: number, r: any) => acc + (r.downloads || 0), 0),
            };
        } else {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        return NextResponse.json({ type, pluginId, data });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
