import type { CaipAddress, LinkingRecord } from './TypeUtil.js';
export declare const CoreHelperUtil: {
    isMobile(): boolean;
    isAndroid(): boolean;
    isIos(): boolean;
    isClient(): boolean;
    isPairingExpired(expiry?: number): boolean;
    isAllowedRetry(lastRetry: number): boolean;
    copyToClopboard(text: string): void;
    getPairingExpiry(): number;
    getPlainAddress(caipAddress: CaipAddress): string | undefined;
    wait(milliseconds: number): Promise<unknown>;
    debounce(func: (...args: any[]) => unknown, timeout?: number): (...args: unknown[]) => void;
    isHttpUrl(url: string): boolean;
    formatNativeUrl(appUrl: string, wcUri: string): LinkingRecord;
    formatUniversalUrl(appUrl: string, wcUri: string): LinkingRecord;
    openHref(href: string, target: '_blank' | '_self'): void;
    preloadImage(src: string): Promise<unknown>;
    formatBalance(balance: string | undefined, symbol: string | undefined): string;
    isRestrictedRegion(): boolean;
    getApiUrl(): "https://api.web3modal.org" | "https://api.web3modal.com";
    getBlockchainApiUrl(): "https://rpc.walletconnect.org" | "https://rpc.walletconnect.com";
    getAnalyticsUrl(): "https://pulse.walletconnect.org" | "https://pulse.walletconnect.com";
    getUUID(): string;
    parseError(error: any): string;
};
