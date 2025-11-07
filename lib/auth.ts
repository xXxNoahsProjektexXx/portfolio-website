import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

interface DiscordProfile {
    id: string;
    username: string;
    avatar?: string;
    email?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            const p = profile as DiscordProfile;
            return p.id === "1408739495662190694";
        },
        async session({ session, token }) {
            session.user.role =
                token.sub === "1408739495662190694" ? "admin" : "user";
            return session;
        },
    },
});
