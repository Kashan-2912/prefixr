'use client';
import dynamic from 'next/dynamic';

const Mesh = dynamic(() => import('@/components/MeshGradient'), { ssr: false });

export default function MeshWrapper() {
  return (
      <Mesh />
  );
}
