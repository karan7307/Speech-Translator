import React from "react";
import STT from "./components/STT";
import Translate from "./components/Translate";
import TTS from "./components/TTS";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 px-6">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-bounce">🌐</span>
          </div>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
            Speech Translator
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide">
            Real-time Voice Translation & Synthesis
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STT Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative p-8">
                  <STT />
                </div>
              </div>
            </div>

            {/* Translate Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative p-8">
                  <Translate />
                </div>
              </div>
            </div>

            {/* TTS Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative p-8">
                  <TTS />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">✨ Powered by Azure Cognitive Services</p>
        </div>
      </div>
    </div>
  );
}
