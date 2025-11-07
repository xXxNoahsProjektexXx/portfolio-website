import { sql } from "@vercel/postgres";

export async function insertContact(name: string, email: string, message: string) {
    await sql`CREATE TABLE IF NOT EXISTS contacts (
                                                      id SERIAL PRIMARY KEY,
                                                      name TEXT, email TEXT, message TEXT,
                                                      created_at TIMESTAMP DEFAULT NOW()
        );`;
    await sql`INSERT INTO contacts (name, email, message)
              VALUES (${name}, ${email}, ${message});`;
}

export async function insertOrder(
    name: string, email: string, project: string, budget: string, details: string
) {
    await sql`CREATE TABLE IF NOT EXISTS orders (
                                                    id SERIAL PRIMARY KEY,
                                                    name TEXT, email TEXT, project TEXT, budget TEXT, details TEXT,
                                                    created_at TIMESTAMP DEFAULT NOW()
        );`;
    await sql`INSERT INTO orders (name, email, project, budget, details)
              VALUES (${name}, ${email}, ${project}, ${budget}, ${details});`;
}

export async function getAllData() {
    const contacts = await sql`SELECT * FROM contacts ORDER BY created_at DESC;`;
    const orders = await sql`SELECT * FROM orders ORDER BY created_at DESC;`;
    return { contacts: contacts.rows, orders: orders.rows };
}
