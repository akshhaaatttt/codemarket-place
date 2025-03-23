export interface CodeListing {
  id: string;
  title: string;
  description: string;
  price: string;
  seller: string;
  language: string;
  createdAt: number;
}

export interface WalletState {
  address: string | null;
  isConnected: boolean;
  chainId: string | null;
}