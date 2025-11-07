import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

export async function saveForm(type: "contacts" | "orders", entry: any) {
    const file = path.join(dataDir, `${type}.json`);
    const list = fs.existsSync(file)
        ? JSON.parse(fs.readFileSync(file, "utf-8"))
        : [];
    list.unshift({ id: Date.now(), ...entry });
    fs.writeFileSync(file, JSON.stringify(list, null, 2));
}

export async function readForms() {
    const contactsPath = path.join(dataDir, "contacts.json");
    const ordersPath = path.join(dataDir, "orders.json");
    const contacts = fs.existsSync(contactsPath)
        ? JSON.parse(fs.readFileSync(contactsPath, "utf-8"))
        : [];
    const orders = fs.existsSync(ordersPath)
        ? JSON.parse(fs.readFileSync(ordersPath, "utf-8"))
        : [];
    return { contacts, orders };
}
