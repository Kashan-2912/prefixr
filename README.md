# PREFIXR

Turn any website into your **personal research assistant**—instantly.  
With PREFIXR, you can drop into any webpage, add a prefix, and start asking AI-powered questions about its content in real-time—without leaving the site.  

- DEMO: https://www.linkedin.com/feed/update/urn:li:activity:7364919769222815745/

---

## 📖 Table of Contents
- [Introduction](#introduction)  
- [Features](#features)  
- [Demo](#demo)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Dependencies](#dependencies)  
- [Troubleshooting](#troubleshooting)  
- [Contributors](#contributors)  
- [License](#license)  

---

## 🌟 Introduction
PREFIXR is a **serverless web app** built with Next.js that lets you overlay an AI chatbot on **any website** by simply adding a prefix before the URL. It combines **retrieval-augmented generation (RAG)** with **vector storage** to provide contextual, conversational answers about the page you’re on.  

Perfect for:  
- Researching academic papers 📑  
- Comparing products 🛒  
- Learning complex concepts 🎓  
- Fact-checking articles 📰  
- Extracting structured data 🔍  

---

## ✨ Features
- 🔗 Works on **any website** with a simple prefix trick  
- 🧠 AI chatbot trained on the page you’re viewing  
- ⚡ Real-time responses without context switching  
- 📊 Supports summarization, explanations, comparisons, fact-checking  
- 📦 Web-scraper–like extraction, but conversational  
- ☁️ Powered by **Upstash Redis & Vector DB** + **Groq AI (or any LLM API)**  

---

## 🎥 Demo
1. Go to any website  
2. Add:  
   ```
   prefixr.vercel.app/[URL]
   ```  
   Example:  
   ```
   prefixr.vercel.app/https://www.nature.com/articles/s41586-023-06522-8
   ```  
3. Ask:  
   - “Summarize this paper in simple terms”  
   - “List the 3 main takeaways”  
   - “Compare this with another AI model”  

---

## 🛠 Installation

Clone the repo:
```bash
git clone https://github.com/yourusername/prefixr.git
cd prefixr
```

Install dependencies:
```bash
pnpm install
# or
npm install
```

Run locally:
```bash
pnpm dev
# or
npm run dev
```

---

## ⚙️ Configuration

Copy `.env.example` to `.env.local` and fill in your credentials:

```env
UPSTASH_VECTOR_REST_URL=
UPSTASH_VECTOR_REST_TOKEN=

QSTASH_TOKEN=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

GROQ_AI_API= # or any LLM API
```

You’ll need accounts for:  
- [Upstash Redis](https://upstash.com/)  
- [Upstash Vector DB](https://upstash.com/vector)  
- [Groq AI](https://groq.com/) or another LLM provider  

---

## 🚀 Usage

Once running, navigate to:

```
http://localhost:3000/[your target URL]
```

Example:
```
http://localhost:3000/https://example.com
```

Ask your questions via the built-in chatbot interface.

---

## 📂 Folder Structure

```
src/
 ├─ app/
 │   ├─ [...url]/page.tsx      # Handles prefixed website rendering
 │   ├─ api/chat-stream/route.ts # Chat streaming API
 │   ├─ hero.ts
 │   ├─ layout.tsx
 │   └─ page.tsx
 │
 ├─ components/                # UI components
 │
 ├─ lib/
 │   ├─ rag-chat.ts            # RAG implementation
 │   ├─ redis.ts               # Redis integration
 │   └─ utils.ts               # Utility functions
 │
 └─ middleware.ts              # Request handling middleware
```

---

## 📦 Dependencies
- [Next.js 13+](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Upstash Redis & Vector](https://upstash.com/)  
- [Groq AI API](https://groq.com/) (or any OpenAI-compatible LLM API)  

---

## 🛠 Troubleshooting
- **Chat not responding?** Check your `GROQ_AI_API` key is valid.  
- **Vector search not working?** Ensure `UPSTASH_VECTOR_REST_URL` and token are set.  
- **Redis errors?** Verify your `UPSTASH_REDIS_REST_URL` and token.  

---

## 👥 Contributors
- [Your Name](https://github.com/yourusername) – Creator & Maintainer  

---

## 📜 License
MIT License © 2025 [Your Name]
