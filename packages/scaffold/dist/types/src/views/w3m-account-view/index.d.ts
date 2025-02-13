import { LitElement } from 'lit';
export declare class W3mAccountView extends LitElement {
    static styles: import("lit").CSSResult;
    private usubscribe;
    private readonly networkImages;
    private address;
    private profileImage;
    private profileName;
    private balance;
    private balanceSymbol;
    private network;
    private disconecting;
    constructor();
    disconnectedCallback(): void;
    getProfile(): string | null;
    private onClick;
    render(): import("lit-html").TemplateResult<1>;
    private explorerBtnTemplate;
    private isAllowedNetworkSwitch;
    private onCopyAddress;
    private onNetworks;
    private onDisconnect;
    private onExplorer;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-view': W3mAccountView;
    }
}
