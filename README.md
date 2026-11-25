<div align="center">

<img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/hero.svg?v=3" width="100%" alt="Ifeanyi Onyekwelu, Full-Stack AI Engineer in Enugu, Nigeria" />

<br/>

[xife3.space](https://xife3.space) &nbsp;·&nbsp; [Zephra Studio](https://zephra.dev) &nbsp;·&nbsp; [X](https://x.com/ifeanyicodes_) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/ifeanyichukwu-onyekwelu-36b93922b) &nbsp;·&nbsp; [Email](mailto:ifeanyionyekwelu786@gmail.com)

</div>

## About

I'm a full-stack engineer with 5+ years of experience building web, mobile and backend systems, from fintech to multi-tenant SaaS. By day I work on [Moniger](https://moniger.com) at Babelos Ltd. I also run [Zephra Studio](https://zephra.dev), a software studio in Enugu, Nigeria that builds production-ready products for founders and businesses.

My current focus is applied AI: retrieval pipelines, vector embeddings, tool-calling agents and the infrastructure that keeps them reliable. I'm studying Computer Science at Godfrey Okoye University alongside.

## Selected work

<table>
  <tr>
    <td width="50%"><a href="https://boxieai.zephra.dev"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/01-boxieai.svg?v=3" width="100%" alt="BoxieAI: AI-powered unified inbox for Gmail" /></a></td>
    <td width="50%"><a href="https://zephra.dev"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/02-zephra-ai-suite.svg?v=3" width="100%" alt="Zephra AI Suite: multi-tenant platform for AI employees" /></a></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/03-edupro.svg?v=3" width="100%" alt="EduPro: multi-tenant school management SaaS" /></td>
    <td width="50%"><a href="https://gbam.app"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/04-gbam.svg?v=3" width="100%" alt="Gbam: WhatsApp orders and payments for online sellers" /></a></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://moniger.com"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/05-moniger.svg?v=3" width="100%" alt="Moniger: fintech platform at Babelos Ltd" /></a></td>
    <td width="50%"><a href="https://ziippa.app"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/06-ziippa.svg?v=3" width="100%" alt="Ziippa: bill-payment wallet" /></a></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://github.com/zephradev/payzeph"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/07-payzeph.svg?v=3" width="100%" alt="PayZeph: utility bill payments on a Turborepo monorepo" /></a></td>
    <td width="50%"><a href="https://github.com/zephradev/flowanalytics"><img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/projects/08-flowanalytics.svg?v=3" width="100%" alt="FlowAnalytics: multi-tenant analytics SaaS" /></a></td>
  </tr>
</table>

Also built: [Savvio](https://savvio-budgetting.vercel.app) (budget and expense tracker) · [MediBook](https://medibook-zephra.vercel.app) (appointment booking).

## Stack

<img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/stack.svg?v=3" width="100%" alt="Backend: NestJS, Node.js, TypeScript, Redis. Data: PostgreSQL, Prisma, Drizzle. AI: RAG, embeddings, tool calling. Frontend: Next.js, React. Mobile: React Native, Flutter. Infra: Docker, GitHub Actions, Vercel." />

## Activity

<img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/contributions.svg?v=3" width="100%" alt="GitHub contribution graph for the last 12 months" />

## How I build AI features

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

Tenant isolation at the data layer, async ingestion so requests stay fast, typed tool contracts, and observability around every model call.

## Zephra Studio

A software studio building web apps, mobile apps, backends, SaaS products and AI integrations for founders who want to ship. Start a project at [hello@zephra.dev](mailto:hello@zephra.dev) or [zephra.dev](https://zephra.dev).

## Now

<img src="https://raw.githubusercontent.com/xife3/xife3/main/assets/now.svg?v=3" width="100%" alt="Currently building Zephra AI Suite, shipping Moniger, learning DevOps and system design, open to remote contracts and client projects" />
