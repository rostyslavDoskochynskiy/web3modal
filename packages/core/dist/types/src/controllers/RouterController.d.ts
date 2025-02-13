import type { CaipNetwork, Connector, WcWallet } from '../utils/TypeUtil.js';
export interface RouterControllerState {
    view: 'Account' | 'Connect' | 'ConnectingExternal' | 'ConnectingWalletConnect' | 'ConnectingSiwe' | 'Networks' | 'SwitchNetwork' | 'AllWallets' | 'WhatIsAWallet' | 'WhatIsANetwork' | 'GetWallet' | 'Downloads';
    history: RouterControllerState['view'][];
    data?: {
        connector?: Connector;
        wallet?: WcWallet;
        network?: CaipNetwork;
    };
}
export declare const RouterController: {
    state: RouterControllerState;
    subscribeKey<K extends keyof RouterControllerState>(key: K, callback: (value: RouterControllerState[K]) => void): () => void;
    push(view: RouterControllerState['view'], data?: RouterControllerState['data']): void;
    reset(view: RouterControllerState['view']): void;
    replace(view: RouterControllerState['view']): void;
    goBack(): void;
};
