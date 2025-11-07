import Discord from "next-auth/providers/discord";
import type { AuthConfig } from "next-auth";

interface DiscordProfile {
    id: string;
    username: string;
    avatar?: string;
    email?: string;
}

export const authConfig: AuthConfig = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            const p = profile as DiscordProfile;
            // Nur dein Discord-Konto zulassen
            return p.id === "1408739495662190694";
        },
        async session({ session, token }) {
            session.user.role =
                token.sub === "1408739495662190694" ? "admin" : "user";
            return session;
        },
    },
};
