import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("https://api.github.com/repos/vercel/next.js");
        const data = await res.json();
        return NextResponse.json({
            name: data.name,
            stars: data.stargazers_count,
            forks: data.forks_count,
            watchers: data.watchers_count,
        });
    } catch {
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
