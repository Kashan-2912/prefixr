import { ragChat } from '@/lib/rag-chat';
import React from 'react'

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructUrl({url} : {url: string[]}) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join('/');
}

const Page = async ({params}: PageProps) => {

    const reconstructedUrl = reconstructUrl({url: params.url as string[]})
    console.log(params)

    await ragChat.context.add({
        type: "html",
        source: reconstructedUrl,
        config: {chunkOverlap: 50, chunkSize: 2000},
    })

  return (
    <div>Page1</div>
  )
}

export default Page