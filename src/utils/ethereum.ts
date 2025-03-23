import { ethers } from 'ethers';

export const SEPOLIA_CHAIN_ID = '0xaa36a7';

export const connectWallet = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: SEPOLIA_CHAIN_ID }],
  });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send('eth_requestAccounts', []);
  
  return {
    address: accounts[0],
    chainId: await window.ethereum.request({ method: 'eth_chainId' }),
  };
};

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const sendTransaction = async (to: string, amount: string) => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const tx = await signer.sendTransaction({
    to: to,
    value: ethers.parseEther(amount),
  });

  return tx;
};