import React, { useState } from 'react';
import { CodeListing } from '../types';
import { formatAddress } from '../utils/ethereum';
import { Code, Tag, Loader2, Shield } from 'lucide-react';

interface CodeCardProps {
  listing: CodeListing;
  onPurchase: (listing: CodeListing) => Promise<void>;
  isOwner: boolean;
}

export default function CodeCard({ listing, onPurchase, isOwner }: CodeCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      await onPurchase(listing);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cyber-card rounded-xl p-6 hover:scale-105 transition-transform">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-cyan-500/10 rounded-lg">
            <Code className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-cyan-300">{listing.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <Shield className="h-4 w-4 text-cyan-500" />
              <p className="text-sm text-gray-400">by {formatAddress(listing.seller)}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-cyan-500/10 px-3 py-1 rounded-lg">
          <Tag className="h-4 w-4 text-cyan-400" />
          <span className="text-lg font-medium text-cyan-300">{listing.price} ETH</span>
        </div>
      </div>

      <p className="mt-4 text-gray-300">{listing.description}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
          {listing.language}
        </span>

        {!isOwner && (
          <button
            onClick={handlePurchase}
            disabled={isLoading}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg hover:from-cyan-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Purchase</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}