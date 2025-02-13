import type { CaipNetwork, CaipNetworkId } from '../utils/TypeUtil.js';
export interface NetworkControllerClient {
    switchCaipNetwork: (network: NetworkControllerState['caipNetwork']) => Promise<void>;
    getApprovedCaipNetworksData: () => Promise<{
        approvedCaipNetworkIds: NetworkControllerState['approvedCaipNetworkIds'];
        supportsAllNetworks: NetworkControllerState['supportsAllNetworks'];
    }>;
}
export interface NetworkControllerState {
    supportsAllNetworks: boolean;
    isDefaultCaipNetwork: boolean;
    _client?: NetworkControllerClient;
    caipNetwork?: CaipNetwork;
    requestedCaipNetworks?: CaipNetwork[];
    approvedCaipNetworkIds?: CaipNetworkId[];
}
export declare const NetworkController: {
    state: NetworkControllerState;
    subscribeKey<K extends keyof NetworkControllerState>(key: K, callback: (value: NetworkControllerState[K]) => void): () => void;
    _getClient(): NetworkControllerClient;
    setClient(client: NetworkControllerClient): void;
    setCaipNetwork(caipNetwork: NetworkControllerState['caipNetwork']): void;
    setDefaultCaipNetwork(caipNetwork: NetworkControllerState['caipNetwork']): void;
    setRequestedCaipNetworks(requestedNetworks: NetworkControllerState['requestedCaipNetworks']): void;
    getApprovedCaipNetworksData(): Promise<void>;
    switchActiveNetwork(network: NetworkControllerState['caipNetwork']): Promise<void>;
    resetNetwork(): void;
};
