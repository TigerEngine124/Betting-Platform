
import { http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig} from 'wagmi';

require("dotenv").config();

import '@rainbow-me/rainbowkit/styles.css';

// Define the connectors for MetaMask and Coinbase Wallet

const RAINBOWKIT_API_KEY = process.env.RAINBOWKIT_API_KEY;

const connectors = connectorsForWallets([
    {
      groupName: 'Connect Wallet',
      wallets: [metaMaskWallet],
    },
  ], 
  {
    appName: 'My RainbowKit App',
    projectId: "c913df003111f45691562989f3bd308d",
});

// Create the configuration object
const config = createConfig({
    connectors,
    chains: [base, baseSepolia],
    transports: {
        [base.id]: http(),
        [baseSepolia.id]: http()
    },
});

export { config };