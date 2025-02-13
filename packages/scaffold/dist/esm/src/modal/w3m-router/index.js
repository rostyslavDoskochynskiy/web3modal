var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
let W3mRouter = class W3mRouter extends LitElement {
    constructor() {
        super();
        this.resizeObserver = undefined;
        this.prevHeight = '0px';
        this.prevHistoryLength = 1;
        this.unsubscribe = [];
        this.view = RouterController.state.view;
        this.unsubscribe.push(RouterController.subscribeKey('view', val => this.onViewChange(val)));
    }
    firstUpdated() {
        this.resizeObserver = new ResizeObserver(async ([content]) => {
            const height = `${content?.contentRect.height}px`;
            if (this.prevHeight !== '0px') {
                await this.animate([{ height: this.prevHeight }, { height }], {
                    duration: 150,
                    easing: 'ease',
                    fill: 'forwards'
                }).finished;
                this.style.height = 'auto';
            }
            this.prevHeight = height;
        });
        this.resizeObserver.observe(this.getWrapper());
    }
    disconnectedCallback() {
        this.resizeObserver?.unobserve(this.getWrapper());
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return html `<div>${this.viewTemplate()}</div>`;
    }
    viewTemplate() {
        switch (this.view) {
            case 'Connect':
                return html `<w3m-connect-view></w3m-connect-view>`;
            case 'ConnectingWalletConnect':
                return html `<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
            case 'ConnectingExternal':
                return html `<w3m-connecting-external-view></w3m-connecting-external-view>`;
            case 'ConnectingSiwe':
                return html `<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
            case 'AllWallets':
                return html `<w3m-all-wallets-view></w3m-all-wallets-view>`;
            case 'Networks':
                return html `<w3m-networks-view></w3m-networks-view>`;
            case 'SwitchNetwork':
                return html `<w3m-network-switch-view></w3m-network-switch-view>`;
            case 'Account':
                return html `<w3m-account-view></w3m-account-view>`;
            case 'WhatIsAWallet':
                return html `<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
            case 'WhatIsANetwork':
                return html `<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
            case 'GetWallet':
                return html `<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case 'Downloads':
                return html `<w3m-downloads-view></w3m-downloads-view>`;
            default:
                return html `<w3m-connect-view></w3m-connect-view>`;
        }
    }
    async onViewChange(newView) {
        const { history } = RouterController.state;
        let xOut = -10;
        let xIn = 10;
        if (history.length < this.prevHistoryLength) {
            xOut = 10;
            xIn = -10;
        }
        this.prevHistoryLength = history.length;
        await this.animate([
            { opacity: 1, transform: 'translateX(0px)' },
            { opacity: 0, transform: `translateX(${xOut}px)` }
        ], { duration: 150, easing: 'ease', fill: 'forwards' }).finished;
        this.view = newView;
        await this.animate([
            { opacity: 0, transform: `translateX(${xIn}px)` },
            { opacity: 1, transform: 'translateX(0px)' }
        ], { duration: 150, easing: 'ease', fill: 'forwards', delay: 50 }).finished;
    }
    getWrapper() {
        return this.shadowRoot?.querySelector('div');
    }
};
W3mRouter.styles = styles;
__decorate([
    state()
], W3mRouter.prototype, "view", void 0);
W3mRouter = __decorate([
    customElement('w3m-router')
], W3mRouter);
export { W3mRouter };
//# sourceMappingURL=index.js.map