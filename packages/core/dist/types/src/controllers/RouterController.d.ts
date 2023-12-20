import type { CaipNetwork, Connector, WcWallet } from '../utils/TypeUtil.js';
export interface RouterControllerState {
    view: 'Account' | 'Connect' | 'ConnectingExternal' | 'ConnectingWalletConnect' | 'ConnectingSiwe' | 'Networks' | 'SwitchNetwork' | 'AllWallets' | 'WhatIsAWallet' | 'WhatIsANetwork' | 'GetWallet' | 'Downloads' | 'EmailVerifyOtp' | 'EmailVerifyDevice' | 'ApproveTransaction' | 'Transactions' | 'UpgradeWallet';
    history: RouterControllerState['view'][];
    data?: {
        connector?: Connector;
        wallet?: WcWallet;
        network?: CaipNetwork;
        email?: string;
    };
}
export declare const RouterController: {
    state: RouterControllerState;
    subscribeKey<K extends keyof RouterControllerState>(key: K, callback: (value: RouterControllerState[K]) => void): () => void;
    push(view: RouterControllerState['view'], data?: RouterControllerState['data']): void;
    reset(view: RouterControllerState['view']): void;
    replace(view: RouterControllerState['view'], data?: RouterControllerState['data']): void;
    goBack(): void;
};
