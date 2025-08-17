import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import React from "react";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );
  return decodedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const { url } = await params;
  const reconstructedUrl = reconstructUrl({ url: url as string[] });

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );

  const sessionId = "mock-session";

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 2000 },
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  } else {
    console.log("URL already indexed:", reconstructedUrl);
  }

  return <ChatWrapper sessionId={sessionId} />;
};

export default Page;
