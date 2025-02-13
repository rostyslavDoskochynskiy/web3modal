import type { SIWEClientMethods, SIWESession } from '../utils/TypeUtil.js';
export interface SIWEControllerClient extends SIWEClientMethods {
    options: {
        enabled: boolean;
        nonceRefetchIntervalMs: number;
        sessionRefetchIntervalMs: number;
        signOutOnDisconnect: boolean;
        signOutOnAccountChange: boolean;
        signOutOnNetworkChange: boolean;
    };
}
export interface SIWEControllerClientState {
    _client?: SIWEControllerClient;
    nonce?: string;
    session?: SIWESession;
    message?: string;
    status: 'uninitialized' | 'ready' | 'loading' | 'success' | 'rejected' | 'error';
}
export declare const SIWEController: {
    state: SIWEControllerClientState;
    subscribeKey<K extends keyof SIWEControllerClientState>(key: K, callback: (value: SIWEControllerClientState[K]) => void): () => void;
    subscribe(callback: (newState: SIWEControllerClientState) => void): () => void;
    _getClient(): SIWEControllerClient;
    setSIWEClient(client: SIWEControllerClient): void;
    setNonce(nonce: SIWEControllerClientState['nonce']): void;
    setStatus(status: SIWEControllerClientState['status']): void;
    setMessage(message: SIWEControllerClientState['message']): void;
    setSession(session: SIWEControllerClientState['session']): void;
};
