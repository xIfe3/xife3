<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:05050a,50:1e1b4b,100:6366f1&height=240&section=header&text=IFEANYI%20ONYEKWELU&fontSize=54&fontColor=e0e7ff&fontAlignY=40&desc=Full-Stack%20AI%20Engineer%20%C2%B7%20Founder%20%40%20Zephra%20Studio&descColor=a5b4fc&descSize=18&descAlignY=62" width="100%" alt="header" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=3200&pause=900&color=A5B4FC&center=true&vCenter=true&width=760&height=40&lines=Shipping+fintech+at+Babelos+%E2%86%92+Moniger;Building+multi-tenant+AI+products+at+Zephra;RAG+%C2%B7+Tool+Calling+%C2%B7+Agents+%C2%B7+Vector+Search;Turning+ideas+into+production-grade+software" alt="typing" />
</a>

<br/>

[![Portfolio](https://img.shields.io/badge/xife3.space-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://xife3.space)
[![Zephra](https://img.shields.io/badge/zephra.dev-0f0f0f?style=for-the-badge&logo=lightning&logoColor=6366f1)](https://zephra.dev)
[![X](https://img.shields.io/badge/@ifeanyicodes__-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/ifeanyicodes_)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ifeanyichukwu-onyekwelu-36b93922b)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ifeanyionyekwelu786@gmail.com)

<img src="https://komarev.com/ghpvc/?username=xife3&label=PROFILE%20VIEWS&color=6366f1&style=flat-square" alt="views" />

</div>

---

## `> whoami`

I'm a **Full-Stack AI Engineer** with 5+ years of experience building web, mobile and backend systems, from fintech to multi-tenant SaaS. By day I build **[Moniger](https://moniger.com)** at **Babelos Ltd**. By night I run **[Zephra Studio](https://zephra.dev)**, an agency in Enugu, Nigeria that ships production-ready products for founders and businesses.

Right now I'm going deep on **applied AI**: retrieval pipelines, vector embeddings, tool-calling agents and the infrastructure that keeps them reliable.

```ts
export const ifeanyi = {
  role:      "Full-Stack AI Engineer",
  day_job:   "Moniger @ Babelos Ltd",
  founder:   "Zephra Studio (zephra.dev)",
  based_in:  "Enugu, Nigeria 🇳🇬",
  core:      ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "React Native"],
  ai:        ["RAG", "Vector Embeddings", "Tool Calling", "Vercel AI SDK"],
  leveling:  ["DevOps", "Docker", "System Design", "Self-hosting"],
  studying:  "B.Sc. Computer Science @ Godfrey Okoye University",
  openTo:    ["Remote contracts", "Client projects", "Interesting problems"],
} as const;
```

---

## ⚡ Tech Arsenal

<div align="center">

| Layer | Stack |
|:--|:--|
| **Backend** | ![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white) ![WebSockets](https://img.shields.io/badge/-WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white) |
| **Data** | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Drizzle](https://img.shields.io/badge/-Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=black) |
| **AI** | ![Vercel AI SDK](https://img.shields.io/badge/-Vercel%20AI%20SDK-000000?style=flat-square&logo=vercel&logoColor=white) ![RAG](https://img.shields.io/badge/-RAG-6366F1?style=flat-square) ![Embeddings](https://img.shields.io/badge/-Vector%20Embeddings-6366F1?style=flat-square) ![Tool Calling](https://img.shields.io/badge/-Tool%20Calling-6366F1?style=flat-square) |
| **Frontend** | ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Tailwind](https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Mobile** | ![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?style=flat-square&logo=react&logoColor=black) ![Flutter](https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white) |
| **Infra** | ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![Railway](https://img.shields.io/badge/-Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white) ![AWS SES](https://img.shields.io/badge/-AWS%20SES-232F3E?style=flat-square&logo=amazonaws&logoColor=white) |

</div>

---

## 🧠 How I Build AI Features

The pattern I reach for when shipping retrieval-backed AI inside a multi-tenant product:

```mermaid
flowchart LR
    U([User]) --> C[Next.js / React Native client]
    C --> API[NestJS API<br/>auth · tenancy · rate limits]
    API --> Q[(Redis queue)]
    Q --> W[Workers<br/>chunk · embed · ingest]
    W --> DB[(PostgreSQL<br/>+ vector index)]
    API --> R[Retriever]
    R --> DB
    R --> L{{LLM<br/>tool calling}}
    L --> T[Tools / integrations]
    L --> API
    API --> C
```

**Principles:** tenant isolation at the data layer, async ingestion so requests stay fast, typed tool contracts, and observability around every model call.

---

## 🚀 Featured Projects

### 🤖 AI Products

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>📬 BoxieAI (Priora)</h4>
      <p>AI-powered unified Gmail inbox. My flagship portfolio build.</p>
      <a href="https://boxieai.zephra.dev">🌍 Live</a>
    </td>
    <td width="50%" valign="top">
      <h4>🧩 Zephra AI Suite</h4>
      <p>Multi-tenant AI SaaS platform under Zephra Studio: agents, knowledge bases and automations for businesses.</p>
      <a href="https://zephra.dev">🌍 zephra.dev</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>🏫 EduPro</h4>
      <p>Multi-tenant, AI-powered school management SaaS with Paystack payments.</p>
      <img src="https://img.shields.io/badge/-Multi--tenant-6366F1?style=flat-square" />
      <img src="https://img.shields.io/badge/-Paystack-00C3F7?style=flat-square" />
    </td>
    <td width="50%" valign="top">
      <h4>🛒 Gbam</h4>
      <p>WhatsApp-native order, Paystack payment and delivery-update flow for Nigerian online sellers.</p>
      <a href="https://gbam.app">🌍 gbam.app</a>
    </td>
  </tr>
</table>

### 💸 Fintech

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>💳 Moniger</h4>
      <p>Personal finance platform I build professionally at Babelos Ltd.</p>
      <a href="https://moniger.com">🌍 moniger.com</a>
    </td>
    <td width="50%" valign="top">
      <h4>👛 Ziippa</h4>
      <p>My own bill-payment wallet product.</p>
      <a href="https://ziippa.app">🌍 ziippa.app</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>⚡ PayZeph</h4>
      <p>Utility bill payments on a Turborepo monorepo: NestJS microservices, Redis queues, Drizzle ORM.</p>
      <a href="https://github.com/zephradev/payzeph">📁 Code</a> · <a href="https://payzeph-zephra-web.vercel.app">🌍 Demo</a>
    </td>
    <td width="50%" valign="top">
      <h4>📈 Savvio</h4>
      <p>Budget and expense tracker with category budgets and spending insights.</p>
      <a href="https://savvio-budgetting.vercel.app">🌍 Demo</a>
    </td>
  </tr>
</table>

### 🏗️ SaaS & Platforms

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>📊 FlowAnalytics</h4>
      <p>Multi-tenant analytics SaaS: team workspaces, custom dashboards, Stripe billing.</p>
      <a href="https://github.com/zephradev/flowanalytics">📁 Code</a> · <a href="https://flowanalytics-zephra.vercel.app">🌍 Demo</a>
    </td>
    <td width="50%" valign="top">
      <h4>🩺 MediBook</h4>
      <p>Doctor appointment platform with real-time slot management.</p>
      <a href="https://github.com/zephra/medibook">📁 Code</a> · <a href="https://medibook-zephra.vercel.app">🌍 Demo</a>
    </td>
  </tr>
</table>

---

## 📡 Live GitHub Telemetry

<div align="center">

<img height="170" src="https://github-readme-stats.vercel.app/api?username=xife3&show_icons=true&hide_border=true&bg_color=0d1117&title_color=a5b4fc&icon_color=6366f1&text_color=c9d1d9&rank_icon=github" alt="stats" />
<img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=xife3&layout=compact&hide_border=true&bg_color=0d1117&title_color=a5b4fc&text_color=c9d1d9" alt="languages" />

<img src="https://streak-stats.demolab.com?user=xife3&theme=dark&hide_border=true&background=0d1117&ring=6366f1&fire=a5b4fc&currStreakLabel=a5b4fc" alt="streak" />

<img src="https://github-readme-activity-graph.vercel.app/graph?username=xife3&bg_color=0d1117&color=a5b4fc&line=6366f1&point=ffffff&area=true&area_color=6366f1&hide_border=true" alt="activity" />

<img src="https://raw.githubusercontent.com/xife3/xife3/output/github-snake-dark.svg" alt="snake" />

</div>

---

## 🏢 Zephra Studio

> **We build production-ready software for founders who want to ship.**

| | |
|:--|:--|
| **Services** | Web apps · Mobile apps · APIs & backends · SaaS · AI integrations |
| **Stack** | Next.js · NestJS · TypeScript · PostgreSQL · React Native |
| **Start a project** | [hello@zephra.dev](mailto:hello@zephra.dev) · [zephra.dev](https://zephra.dev) |

---

## 🎯 Currently

- 🔭 Building out **Zephra AI Suite**
- 🌱 Leveling up on **DevOps, Docker and system design**
- 🎓 Studying Computer Science at Godfrey Okoye University
- 💬 Ask me about **NestJS, multi-tenant architecture, RAG and fintech backends**

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,100:05050a&height=120&section=footer" width="100%" alt="footer" />

</div>
