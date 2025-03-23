import React from 'react';
import { CodeListing } from '../types';
import CodeCard from './CodeCard';
import CreateListing from './CreateListing';

interface ListingsSectionProps {
  listings: CodeListing[];
  onPurchase: (listing: CodeListing) => Promise<void>;
  isConnected: boolean;
  userAddress: string | null;
  onCreateListing: (data: { title: string; description: string; price: string; language: string; }) => void;
}

export default function ListingsSection({
  listings,
  onPurchase,
  isConnected,
  userAddress,
  onCreateListing
}: ListingsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="listings">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Listings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through the latest code snippets and solutions from our community
          </p>
        </div>

        {isConnected && (
          <div className="mb-12">
            <CreateListing onSubmit={onCreateListing} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <CodeCard
              key={listing.id}
              listing={listing}
              onPurchase={onPurchase}
              isOwner={listing.seller === userAddress}
            />
          ))}
        </div>

        {listings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No listings yet. Be the first to sell your code!</p>
          </div>
        )}
      </div>
    </section>
  );
}