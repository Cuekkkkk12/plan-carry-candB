import fs from "node:fs";

const plan = "Day 1: DM 20 freelancers on X about late invoices. Build AI invoice-chaser in 48h: auto-reminders, late-fee drafts. Pre-sell $29 on Gumroad first. Launch Product Hunt; $70 X ads, $30 fees. 40 sales by day 30 = $1,160. Product, not hours — it sells while I build the next one.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", plan, "utf-8");
