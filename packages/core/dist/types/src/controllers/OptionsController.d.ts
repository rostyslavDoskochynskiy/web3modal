import type { CustomWallet, Metadata, ProjectId, SdkVersion, Tokens } from '../utils/TypeUtil.js';
export interface OptionsControllerState {
    projectId: ProjectId;
    featuredWalletIds?: string[];
    includeWalletIds?: string[];
    excludeWalletIds?: string[];
    tokens?: Tokens;
    customWallets?: CustomWallet[];
    termsConditionsUrl?: string;
    privacyPolicyUrl?: string;
    enableAnalytics?: boolean;
    sdkType: 'w3m';
    sdkVersion: SdkVersion;
    metadata?: Metadata;
}
export declare const OptionsController: {
    state: OptionsControllerState;
    subscribeKey<K extends keyof OptionsControllerState>(key: K, callback: (value: OptionsControllerState[K]) => void): () => void;
    setProjectId(projectId: OptionsControllerState['projectId']): void;
    setIncludeWalletIds(includeWalletIds: OptionsControllerState['includeWalletIds']): void;
    setExcludeWalletIds(excludeWalletIds: OptionsControllerState['excludeWalletIds']): void;
    setFeaturedWalletIds(featuredWalletIds: OptionsControllerState['featuredWalletIds']): void;
    setTokens(tokens: OptionsControllerState['tokens']): void;
    setTermsConditionsUrl(termsConditionsUrl: OptionsControllerState['termsConditionsUrl']): void;
    setPrivacyPolicyUrl(privacyPolicyUrl: OptionsControllerState['privacyPolicyUrl']): void;
    setCustomWallets(customWallets: OptionsControllerState['customWallets']): void;
    setEnableAnalytics(enableAnalytics: OptionsControllerState['enableAnalytics']): void;
    setSdkVersion(sdkVersion: OptionsControllerState['sdkVersion']): void;
    setMetadata(metadata: OptionsControllerState['metadata']): void;
};
