import MeshWrapper from "@/components/MeshWrapper";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen  relative overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0">
        <MeshWrapper />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-800 bg-clip-text text-transparent mb-2">
            Prefixr
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
            ChatBetter
          </p>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Chat with any{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            website
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Simply put{" "}
          <code className="bg-gray-800/50 text-cyan-400 px-2 py-1 rounded font-mono text-base border border-gray-700/50">
            https://prefixr.vercel.app/
          </code>{" "}
          before any site url and click enter
        </p>

        {/* Example */}
        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 backdrop-blur-sm max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-2">Example:</p>
          <code className="text-green-400 font-mono text-sm md:text-base break-all">
            https://prefixr.vercel.app/https://github.com
          </code>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-full blur-xl animate-bounce delay-1000"></div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
