import type { Web3ModalScaffold } from '@web3modal/scaffold';
import type { W3mAccountButton, W3mButton, W3mConnectButton, W3mNetworkButton } from '@web3modal/scaffold';
type OpenOptions = Parameters<Web3ModalScaffold['open']>[0];
type ThemeModeOptions = Parameters<Web3ModalScaffold['setThemeMode']>[0];
type ThemeVariablesOptions = Parameters<Web3ModalScaffold['setThemeVariables']>[0];
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        W3mConnectButton: Pick<W3mConnectButton, 'size' | 'label' | 'loadingLabel'>;
        W3mAccountButton: Pick<W3mAccountButton, 'disabled' | 'balance'>;
        W3mButton: Pick<W3mButton, 'size' | 'label' | 'loadingLabel' | 'disabled' | 'balance'>;
        W3mNetworkButton: Pick<W3mNetworkButton, 'disabled'>;
    }
}
export declare function getWeb3Modal(web3modal: any): void;
export declare function useWeb3ModalTheme(): {
    setThemeMode: (themeMode: ThemeModeOptions) => void;
    setThemeVariables: (themeVariables: ThemeVariablesOptions) => void;
    themeMode: import("@web3modal/scaffold").ThemeMode;
    themeVariables: {
        '--w3m-font-family'?: string | undefined;
        '--w3m-accent'?: string | undefined;
        '--w3m-color-mix'?: string | undefined;
        '--w3m-color-mix-strength'?: number | undefined;
        '--w3m-font-size-master'?: string | undefined;
        '--w3m-border-radius-master'?: string | undefined;
        '--w3m-z-index'?: number | undefined;
    };
};
export declare function useWeb3Modal(): {
    open: (options?: OpenOptions) => Promise<void>;
    close: () => Promise<void>;
};
export declare function useWeb3ModalState(): {
    open: boolean;
    selectedNetworkId: `${string}:${string}` | undefined;
};
export declare function useWeb3ModalEvents(): {
    timestamp: number;
    data: {
        type: "track";
        event: "MODAL_CREATED";
    } | {
        type: "track";
        event: "MODAL_LOADED";
    } | {
        type: "track";
        event: "MODAL_OPEN";
    } | {
        type: "track";
        event: "MODAL_CLOSE";
    } | {
        type: "track";
        event: "CLICK_ALL_WALLETS";
    } | {
        type: "track";
        event: "SELECT_WALLET";
        properties: {
            name: string;
            platform: import("@web3modal/scaffold").Platform;
        };
    } | {
        type: "track";
        event: "CONNECT_SUCCESS";
        properties: {
            method: "browser" | "mobile" | "qrcode" | "external";
        };
    } | {
        type: "track";
        event: "CONNECT_ERROR";
        properties: {
            message: string;
        };
    } | {
        type: "track";
        event: "DISCONNECT_SUCCESS";
    } | {
        type: "track";
        event: "DISCONNECT_ERROR";
    } | {
        type: "track";
        event: "CLICK_WALLET_HELP";
    } | {
        type: "track";
        event: "CLICK_NETWORK_HELP";
    } | {
        type: "track";
        event: "CLICK_GET_WALLET";
    };
};
export {};
