import React from 'react';
import { Lock, Code2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="cyber-gradient min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-block">
            <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
              Secure • Decentralized • Instant
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 font-mono">
            DEV VAULT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl font-light">
            The secure blockchain vault for premium code assets. Buy, sell, and trade 
            verified code snippets with confidence.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Launch App
            </button>
            <button className="px-8 py-4 bg-transparent border border-cyan-500/50 rounded-lg text-lg font-semibold hover:bg-cyan-500/10 transition-all">
              Documentation
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Lock className="h-8 w-8 text-cyan-400" />,
              title: "Secure Storage",
              description: "Military-grade encryption for your valuable code assets"
            },
            {
              icon: <Code2 className="h-8 w-8 text-cyan-400" />,
              title: "Verified Code",
              description: "Every snippet is reviewed and verified by experts"
            },
            {
              icon: <Zap className="h-8 w-8 text-cyan-400" />,
              title: "Instant Transfer",
              description: "Lightning-fast delivery through smart contracts"
            }
          ].map((feature, index) => (
            <div key={index} className="cyber-card p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}