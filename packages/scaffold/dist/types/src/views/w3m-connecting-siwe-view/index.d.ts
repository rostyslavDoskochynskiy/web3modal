import { LitElement } from 'lit';
export declare class W3mConnectingSiweView extends LitElement {
    private readonly dappUrl;
    private readonly dappName;
    render(): import("lit-html").TemplateResult<1>;
    private urlTemplate;
    private onDappLink;
    private onSign;
    private onCancel;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-siwe-view': W3mConnectingSiweView;
    }
}
