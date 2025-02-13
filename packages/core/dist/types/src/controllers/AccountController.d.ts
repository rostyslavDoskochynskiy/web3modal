import type { CaipAddress } from '../utils/TypeUtil.js';
export interface AccountControllerState {
    isConnected: boolean;
    caipAddress?: CaipAddress;
    address?: string;
    balance?: string;
    balanceSymbol?: string;
    profileName?: string;
    profileImage?: string;
    addressExplorerUrl?: string;
}
export declare const AccountController: {
    state: AccountControllerState;
    subscribe(callback: (newState: AccountControllerState) => void): () => void;
    subscribeKey<K extends keyof AccountControllerState>(key: K, callback: (value: AccountControllerState[K]) => void): () => void;
    setIsConnected(isConnected: AccountControllerState['isConnected']): void;
    setCaipAddress(caipAddress: AccountControllerState['caipAddress']): void;
    setBalance(balance: AccountControllerState['balance'], balanceSymbol: AccountControllerState['balanceSymbol']): void;
    setProfileName(profileName: AccountControllerState['profileName']): void;
    setProfileImage(profileImage: AccountControllerState['profileImage']): void;
    setAddressExplorerUrl(explorerUrl: AccountControllerState['addressExplorerUrl']): void;
    resetAccount(): void;
};
