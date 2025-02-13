import type { ApiGetWalletsRequest, WcWallet } from '../utils/TypeUtil.js';
export interface ApiControllerState {
    prefetchPromise?: Promise<unknown>;
    page: number;
    count: number;
    featured: WcWallet[];
    recommended: WcWallet[];
    wallets: WcWallet[];
    search: WcWallet[];
}
export declare const ApiController: {
    state: ApiControllerState;
    subscribeKey<K extends keyof ApiControllerState>(key: K, callback: (value: ApiControllerState[K]) => void): () => void;
    _getApiHeaders(): {
        'x-project-id': string;
        'x-sdk-type': "w3m";
        'x-sdk-version': import("../utils/TypeUtil.js").SdkVersion;
    };
    _fetchWalletImage(imageId: string): Promise<void>;
    _fetchNetworkImage(imageId: string): Promise<void>;
    _fetchConnectorImage(imageId: string): Promise<void>;
    fetchNetworkImages(): Promise<void>;
    fetchConnectorImages(): Promise<void>;
    fetchFeaturedWallets(): Promise<void>;
    fetchRecommendedWallets(): Promise<void>;
    fetchWallets({ page }: Pick<ApiGetWalletsRequest, 'page'>): Promise<void>;
    searchWallet({ search }: Pick<ApiGetWalletsRequest, 'search'>): Promise<void>;
    prefetch(): void;
};
