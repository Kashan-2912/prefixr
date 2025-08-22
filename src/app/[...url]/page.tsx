import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import React from "react";

interface PageProps {
  params: Promise<{
    url: string[];
  }>;
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );
  return decodedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = (await cookies()).get("sessionId")?.value;
  const { url } = await params;
  
  const reconstructedUrl = reconstructUrl({ url: url as string[] });
  console.log("URL:", reconstructedUrl);

  // remove all slashes -> /,\ with empty string...
  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    ""
  );

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );

  const initialMessages = await ragChat.history.getMessages({
    amount: 20,
    sessionId,
  });

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 200, chunkSize: 500 },
      options: { metadata: { siteId: reconstructedUrl } },
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  } else {
    console.log("URL already indexed:", reconstructedUrl);
  }

  return (
    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} reconstructedUrl={reconstructedUrl} />
  );
};

export default Page;
