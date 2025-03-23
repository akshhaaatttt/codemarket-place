import React from 'react';
import { Terminal, GitBranch, Package, Database, Code, Cpu, Shield, Cog } from 'lucide-react';

export default function ExploreSection() {
  const categories = [
    { icon: <Terminal className="h-6 w-6" />, name: "CLI Tools", count: 186 },
    { icon: <Shield className="h-6 w-6" />, name: "Security", count: 143 },
    { icon: <Code className="h-6 w-6" />, name: "Snippets", count: 295 },
    { icon: <Cpu className="h-6 w-6" />, name: "Smart Contracts", count: 167 },
    { icon: <GitBranch className="h-6 w-6" />, name: "Algorithms", count: 156 },
    { icon: <Package className="h-6 w-6" />, name: "Components", count: 389 },
    { icon: <Database className="h-6 w-6" />, name: "Backend", count: 167 },
    { icon: <Cog className="h-6 w-6" />, name: "Utils", count: 234 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-25"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
            Browse Categories
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
            Explore the Vault
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover a vast collection of verified code assets across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cyber-card p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-cyan-300">{category.name}</h3>
                  <p className="text-gray-400">{category.count} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}