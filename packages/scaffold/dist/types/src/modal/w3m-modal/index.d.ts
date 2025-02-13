import { LitElement } from 'lit';
export declare class W3mModal extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    private abortController?;
    private open;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1> | null;
    private onOverlayClick;
    private initializeTheming;
    private onClose;
    private onOpen;
    private onScrollLock;
    private onScrollUnlock;
    private onAddKeyboardListener;
    private onRemoveKeyboardListener;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal': W3mModal;
    }
}
