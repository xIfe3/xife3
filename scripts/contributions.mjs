#!/usr/bin/env node
/**
 * Draws your real GitHub contribution graph as assets/contributions.svg.
 *
 * Why this exists: third-party stat widgets miss private contributions and cache
 * stale data. This reads the same public calendar your profile page shows, so the
 * numbers match it exactly (including private contributions if you have
 * "Private contributions" enabled in your profile settings).
 *
 * Usage (Node 18+, no dependencies):
 *   node scripts/contributions.mjs                  # user xife3 -> assets/contributions.svg
 *   node scripts/contributions.mjs someuser --out assets/contributions.svg
 *   node scripts/contributions.mjs --html saved.html   # parse a saved page instead of fetching
 *
 * If fetching or parsing fails it exits with an error and leaves the old SVG untouched.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
};
const user = argv[0] && !argv[0].startsWith("--") ? argv[0] : "xife3";
const outPath = flag("--out") ?? "assets/contributions.svg";
const htmlPath = flag("--html");

async function getHtml() {
  if (htmlPath) return readFile(htmlPath, "utf8");
  const res = await fetch(`https://github.com/users/${user}/contributions`, {
    headers: { "user-agent": "Mozilla/5.0 (contributions-svg)" },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status} for ${user}`);
  return res.text();
}

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

function parse(html) {
  const tips = new Map();
  for (const m of html.matchAll(/<tool-tip[^>]*\sfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const t = m[2].trim();
    const n = t.startsWith("No contributions") ? 0 : Number(t.match(/^([\d,]+)\s+contribution/)?.[1]?.replace(/,/g, ""));
    tips.set(m[1], Number.isFinite(n) ? n : null);
  }
  const days = [];
  for (const m of html.matchAll(/<td\b[^>]*data-date="\d{4}-\d{2}-\d{2}"[^>]*>/g)) {
    const tag = m[0];
    const date = attr(tag, "data-date");
    const level = Number(attr(tag, "data-level") ?? 0);
    const direct = attr(tag, "data-count");
    const count = direct != null ? Number(direct) : tips.get(attr(tag, "id")) ?? null;
    days.push({ date, level, count });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 300) throw new Error(`Only parsed ${days.length} days; GitHub's markup may have changed.`);
  const headerTotal = html.match(/([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i)?.[1];
  const summed = days.every((d) => d.count != null) ? days.reduce((a, d) => a + d.count, 0) : null;
  const total = headerTotal ? Number(headerTotal.replace(/,/g, "")) : summed;
  return { days, total };
}

const active = (d) => (d.count ?? 0) > 0 || d.level > 0;

function streaks(days) {
  let longest = 0, run = 0;
  for (const d of days) {
    run = active(d) ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let i = days.length - 1;
  if (!active(days[i])) i--; // today may not have contributions yet
  let current = 0;
  while (i >= 0 && active(days[i])) { current++; i--; }
  return { longest, current, activeDays: days.filter(active).length };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const INK = "#0e0f11", LINE = "#2a2c31", TXT = "#ece9e2", MUTE = "#8c8a84", ACC = "#ff7a3d";
const RAMP = ["#1b1c20", "#4a2b1b", "#86441f", "#c75f24", "#ff7a3d"];
const MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,'Liberation Mono',monospace";
const SERIF = "Georgia,'Times New Roman','DejaVu Serif',serif";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function render({ days, total }) {
  const st = streaks(days);
  const W = 900, H = 318, GX = 68, GY = 158, P = 15, C = 12;
  const firstRow = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const pos = (i) => ({ col: Math.floor((i + firstRow) / 7), row: (i + firstRow) % 7 });

  let s = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">`;
  s += `<title>${esc(String(total ?? "?"))} contributions in the last year</title>`;
  s += `<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="4" fill="${INK}" stroke="${LINE}"/>`;
  const lab = (x, y, t, o = {}) =>
    `<text x="${x}" y="${y}" text-anchor="${o.a ?? "start"}" font-family="${MONO}" font-size="${o.s ?? 10.5}" letter-spacing="${o.ls ?? 2.5}" fill="${o.f ?? MUTE}">${esc(t)}</text>`;
  s += lab(40, 26, "ACTIVITY") + lab(W - 40, 26, `GITHUB / ${user.toUpperCase()}`, { a: "end" });
  s += `<line x1="0" y1="42" x2="${W}" y2="42" stroke="${LINE}"/>`;

  const stats = [
    [total != null ? total.toLocaleString("en-US") : "—", "contributions, last 12 months"],
    [String(st.longest), "longest streak, days"],
    [String(st.current), "current streak, days"],
    [String(st.activeDays), "active days"],
  ];
  stats.forEach(([n, l], i) => {
    const x = [40, 300, 490, 680][i];
    s += `<text x="${x}" y="88" font-family="${SERIF}" font-size="38" fill="${i === 0 ? ACC : TXT}">${esc(n)}</text>`;
    s += lab(x, 108, l.toUpperCase(), { s: 9, ls: 1.5 });
  });

  // month labels
  const labels = [];
  let prev = -1;
  const cols = new Map();
  days.forEach((d, i) => { const { col, row } = pos(i); if (row === 0 || !cols.has(col)) cols.set(col, d.date); });
  for (const [col, date] of [...cols.entries()].sort((a, b) => a[0] - b[0])) {
    const m = Number(date.slice(5, 7)) - 1;
    if (m !== prev) { labels.push([col, MONTHS[m]]); prev = m; }
  }
  if (labels.length > 1 && labels[1][0] - labels[0][0] < 3) labels.shift();
  for (const [col, name] of labels) s += lab(GX + col * P, GY - 10, name, { s: 9.5, ls: 0.5 });
  [["Mon", 1], ["Wed", 3], ["Fri", 5]].forEach(([n, r]) => { s += lab(40, GY + r * P + 10, n, { s: 9, ls: 0.5 }); });

  // cells, fading in column by column
  const byCol = new Map();
  days.forEach((d, i) => {
    const { col, row } = pos(i);
    const tip = d.count != null ? `${d.count} on ${d.date}` : d.date;
    const cell = `<rect x="${GX + col * P}" y="${GY + row * P}" width="${C}" height="${C}" rx="2" fill="${RAMP[Math.min(d.level, 4)]}"><title>${esc(tip)}</title></rect>`;
    byCol.set(col, (byCol.get(col) ?? "") + cell);
  });
  for (const [col, cells] of byCol) {
    const d = col * 0.018; // static default is fully visible; the fade-in is progressive enhancement
    s += `<g><animate attributeName="opacity" values="0;0;1" keyTimes="0;${(d / (d + 0.4)).toFixed(3)};1" dur="${(d + 0.4).toFixed(2)}s" fill="freeze"/>${cells}</g>`;
  }

  // legend + provenance
  const ly = GY + 7 * P + 24;
  s += lab(GX, ly + 9, "LESS", { s: 9, ls: 1.5 });
  RAMP.forEach((c, i) => { s += `<rect x="${GX + 36 + i * 15}" y="${ly}" width="${C}" height="${C}" rx="2" fill="${c}"/>`; });
  s += lab(GX + 36 + 5 * 15 + 6, ly + 9, "MORE", { s: 9, ls: 1.5 });
  const stamp = new Date().toISOString().slice(0, 10);
  s += lab(W - 40, ly + 9, `GENERATED ${stamp} FROM GITHUB.COM/${user.toUpperCase()}`, { a: "end", s: 9, ls: 1 });
  return s + "</svg>";
}

try {
  const data = parse(await getHtml());
  const svg = render(data);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, svg);
  const st = streaks(data.days);
  console.log(`wrote ${outPath}: ${data.total ?? "?"} contributions, ${data.days.length} days, longest streak ${st.longest}, current ${st.current}`);
} catch (e) {
  console.error("FAILED, existing SVG left untouched:", e.message);
  process.exit(1);
}
