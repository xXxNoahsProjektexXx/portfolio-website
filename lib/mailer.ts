import nodemailer from "nodemailer";

export async function sendMail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to,
        subject,
        text,
    });
}