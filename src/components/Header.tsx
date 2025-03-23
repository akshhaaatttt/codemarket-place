import React from 'react';
import { Code2, Wallet } from 'lucide-react';
import { formatAddress } from '../utils/ethereum';

interface HeaderProps {
  isConnected: boolean;
  address: string | null;
  onConnect: () => void;
}

export default function Header({ isConnected, address, onConnect }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900/95 to-indigo-900/95 backdrop-blur-lg border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-cyan-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              DevVault
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Explore</a>
            <a href="#listings" className="text-gray-300 hover:text-white transition-colors">Listings</a>
          </div>
          
          <button
            onClick={onConnect}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isConnected
                ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-600/50'
                : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600'
            }`}
          >
            <Wallet className="h-5 w-5" />
            <span>
              {isConnected ? formatAddress(address!) : 'Connect Wallet'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}