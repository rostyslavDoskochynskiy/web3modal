import type { Web3ModalOptions } from '../src/client.js';
import { Web3Modal } from '../src/client.js';
import type { Eip1193Provider } from 'ethers';
export type { Web3ModalOptions } from '../src/client.js';
export declare function createWeb3Modal(options: Web3ModalOptions): Web3Modal;
export declare function useWeb3ModalProvider(): {
    walletProvider: Eip1193Provider | undefined;
    walletProviderType: "walletConnect" | "injected" | "coinbaseWallet" | "eip6963" | "w3mEmail" | undefined;
};
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useWeb3ModalAccount(): {
    address: `0x${string}` | undefined;
    isConnected: boolean;
    chainId: number | undefined;
};
export declare function useWeb3ModalError(): {
    error: unknown;
};
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents } from '@ridotto-io/w3-scaffold-react';
export { defaultConfig } from '../src/utils/defaultConfig.js';
