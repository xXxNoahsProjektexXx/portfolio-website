import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function GET() {
    const pdf = await PDFDocument.create();

    // ---------- FONTS ----------
    const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdf.embedFont(StandardFonts.Helvetica);

    // ---------- LOAD IMAGES ----------
    const profilePath = path.join(process.cwd(), "public/profile.png");
    const logoPath = path.join(process.cwd(), "public/logo.png");
    const signPath = path.join(process.cwd(), "public/sign.png");

    const [profileImg, logoImg, signImg] = await Promise.all([
        pdf.embedPng(fs.readFileSync(profilePath)),
        pdf.embedPng(fs.readFileSync(logoPath)),
        pdf.embedPng(fs.readFileSync(signPath)),
    ]);

    // ---------- PAGE 1 ----------
    const page1 = pdf.addPage([595, 842]);
    const { width, height } = page1.getSize();

    // Logo
    page1.drawImage(logoImg, { x: 40, y: height - 80, width: 60, height: 60 });

    // Titel
    page1.drawText("Noah – Full Stack Developer", {
        x: 120,
        y: height - 50,
        size: 22,
        font: fontBold,
        color: rgb(0.65, 0.3, 0.9),
    });

    // Profilbild
    page1.drawImage(profileImg, { x: width - 180, y: height - 240, width: 120, height: 120 });

    // Kontakt / Intro
    const intro = [
        "Standort: Wien, Österreich",
        "E-Mail: kontakt@noah.dev",
        "Website: www.noah.dev",
        "",
        "Ich bin ein kreativer Full-Stack Entwickler mit Leidenschaft für moderne",
        "Web-, API- und Plugin-Projekte. Ich verbinde Design, Performance und",
        "Funktionalität zu eleganten digitalen Lösungen.",
    ].join("\n");

    page1.drawText(intro, {
        x: 40,
        y: height - 150,
        font: fontRegular,
        size: 11,
        color: rgb(0.95, 0.95, 0.95),
        lineHeight: 15,
    });

    // Skills
    const skills = [
        "Frontend: React, Next.js, TailwindCSS",
        "Backend: Node.js, Express, Flask, FastAPI",
        "DevOps: Docker, Proxmox, Nginx, Cloudflare",
        "Design: Figma, Photoshop, After Effects",
    ].join("\n");

    page1.drawText("Skills", {
        x: 40,
        y: height - 260,
        font: fontBold,
        size: 14,
        color: rgb(0.7, 0.4, 1),
    });

    page1.drawText(skills, {
        x: 40,
        y: height - 280,
        font: fontRegular,
        size: 11,
        color: rgb(0.95, 0.95, 0.95),
        lineHeight: 14,
    });

    // Unterschrift
    page1.drawImage(signImg, { x: width - 220, y: 70, width: 150, height: 50 });
    page1.drawText("Noah", {
        x: width - 180,
        y: 60,
        size: 10,
        font: fontRegular,
        color: rgb(0.8, 0.8, 0.8),
    });

    // ---------- PAGE 2 ----------
    const page2 = pdf.addPage([595, 842]);

    page2.drawText("Projekte & Erfahrungen", {
        x: 50,
        y: height - 70,
        font: fontBold,
        size: 16,
        color: rgb(0.7, 0.4, 1),
    });

    const projects = [
        "Enhanced-Loop Hosting – Full-Stack Hosting-Dashboard mit Next.js & API",
        "ByteShare.tf – Marktplatz für Discord-Bots, Plugins & Designs",
        "TypischGames Plugins – Wirtschaft, Jobs, Booster-Systeme für Minecraft",
        "FlameFM – Interaktives Online-Radio mit Webplayer & Discord-Integration",
    ].join("\n\n");

    page2.drawText(projects, {
        x: 50,
        y: height - 110,
        font: fontRegular,
        size: 11,
        color: rgb(0.95, 0.95, 0.95),
        lineHeight: 18,
    });

    // Education & Misc
    page2.drawText("Ausbildung & Weitere Infos", {
        x: 50,
        y: height - 320,
        font: fontBold,
        size: 14,
        color: rgb(0.7, 0.4, 1),
    });

    const edu = [
        "Ausbildung: Fachrichtung Software- & Webentwicklung",
        "Erfahrung: 5+ Jahre in Full-Stack & Plugin-Development",
        "Sprachen: Deutsch (C2), Englisch (C1)",
    ].join("\n");

    page2.drawText(edu, {
        x: 50,
        y: height - 340,
        font: fontRegular,
        size: 11,
        color: rgb(0.95, 0.95, 0.95),
        lineHeight: 15,
    });

    const pdfBytes = await pdf.save();

    // @ts-ignore
    return new NextResponse(pdfBytes, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=noah_resume.pdf",
        },
    });
}
