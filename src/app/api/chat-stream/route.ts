import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { messages, sessionId, reconstructedUrl } = await req.json();

  console.log("URL for chat:", reconstructedUrl);

  const siteId = sessionId.split("--")[0]; 
  console.log("Site ID:", siteId);

  const lastMessage = messages[messages.length - 1].content;

  const response = await ragChat.chat(lastMessage, {
    streaming: true,
    sessionId,
    contextFilter: `siteId = '${reconstructedUrl}'`,
    topK: 10,
  });

  console.log("RESPONSE:", response);

  return aiUseChatAdapter(response);
};
