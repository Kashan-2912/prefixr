import { RAGChat, groq } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
    // model: upstash("mistralai/Mistral-7B-Instruct-v0.2"),
    model: groq("llama-3.3-70b-versatile", {apiKey: process.env.GROQ_AI_API}),
})