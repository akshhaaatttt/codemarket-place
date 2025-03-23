import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import ListingsSection from './components/ListingsSection';
import { connectWallet, SEPOLIA_CHAIN_ID, sendTransaction } from './utils/ethereum';
import { CodeListing, WalletState } from './types';

function App() {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    isConnected: false,
    chainId: null,
  });

  const [listings, setListings] = useState<CodeListing[]>(() => {
    const saved = localStorage.getItem('codeListings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('codeListings', JSON.stringify(listings));
  }, [listings]);

  const handleConnect = async () => {
    try {
      const { address, chainId } = await connectWallet();
      
      if (chainId !== SEPOLIA_CHAIN_ID) {
        toast.error('Please switch to Sepolia testnet');
        return;
      }

      setWallet({
        address,
        isConnected: true,
        chainId,
      });
      
      toast.success('Wallet connected successfully!');
    } catch (error) {
      toast.error('Failed to connect wallet');
      console.error(error);
    }
  };

  const handleCreateListing = (data: { title: string; description: string; price: string; language: string; }) => {
    if (!wallet.isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    const newListing: CodeListing = {
      id: Date.now().toString(),
      ...data,
      seller: wallet.address!,
      createdAt: Date.now(),
    };

    setListings([newListing, ...listings]);
    toast.success('Listing created successfully!');
  };

  const handlePurchase = async (listing: CodeListing) => {
    if (!wallet.isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      const purchasePromise = sendTransaction(listing.seller, listing.price);
      
      await toast.promise(purchasePromise, {
        loading: 'Processing transaction...',
        success: 'Purchase successful! The code will be delivered to your email.',
        error: 'Transaction failed. Please try again.',
      });
    } catch (error) {
      console.error('Purchase error:', error);
    }
  };

  return (
    <div className="min-h-screen space-bg text-white">
      <Toaster position="top-right" />
      <Header
        isConnected={wallet.isConnected}
        address={wallet.address}
        onConnect={handleConnect}
      />
      
      <Hero />
      
      <ExploreSection />
      
      <ListingsSection
        listings={listings}
        onPurchase={handlePurchase}
        isConnected={wallet.isConnected}
        userAddress={wallet.address}
        onCreateListing={handleCreateListing}
      />
    </div>
  );
}

export default App;