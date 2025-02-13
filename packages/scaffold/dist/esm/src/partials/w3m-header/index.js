var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ConnectionController, EventsController, ModalController, RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
function headings() {
    const connectorName = RouterController.state.data?.connector?.name;
    const walletName = RouterController.state.data?.wallet?.name;
    const networkName = RouterController.state.data?.network?.name;
    const name = walletName ?? connectorName;
    return {
        Connect: 'Connect Wallet',
        Account: undefined,
        ConnectingExternal: name ?? 'Connect Wallet',
        ConnectingWalletConnect: name ?? 'WalletConnect',
        ConnectingSiwe: 'Sign In',
        Networks: 'Choose Network',
        SwitchNetwork: networkName ?? 'Switch Network',
        AllWallets: 'All Wallets',
        WhatIsANetwork: 'What is a network?',
        WhatIsAWallet: 'What is a wallet?',
        GetWallet: 'Get a Wallet',
        Downloads: name ? `Get ${name}` : 'Downloads'
    };
}
let W3mHeader = class W3mHeader extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.heading = headings()[RouterController.state.view];
        this.buffering = false;
        this.showBack = false;
        this.unsubscribe.push(RouterController.subscribeKey('view', val => {
            this.onViewChange(val);
            this.onHistoryChange();
        }), ConnectionController.subscribeKey('buffering', val => (this.buffering = val)));
    }
    disconnectCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return html `
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${ModalController.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `;
    }
    onWalletHelp() {
        EventsController.sendEvent({ type: 'track', event: 'CLICK_WALLET_HELP' });
        RouterController.push('WhatIsAWallet');
    }
    titleTemplate() {
        return html `<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`;
    }
    dynamicButtonTemplate() {
        const { view } = RouterController.state;
        const isConnectHelp = view === 'Connect';
        if (this.showBack) {
            return html `<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${RouterController.goBack}
      ></wui-icon-link>`;
        }
        return html `<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
    }
    separatorTemplate() {
        if (!this.heading) {
            return null;
        }
        return html `<wui-separator></wui-separator>`;
    }
    getPadding() {
        if (this.heading) {
            return ['l', '2l', 'l', '2l'];
        }
        return ['l', '2l', '0', '2l'];
    }
    async onViewChange(view) {
        const headingEl = this.shadowRoot?.querySelector('wui-text');
        if (headingEl) {
            const preset = headings()[view];
            await headingEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.heading = preset;
            headingEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    async onHistoryChange() {
        const { history } = RouterController.state;
        const buttonEl = this.shadowRoot?.querySelector('#dynamic');
        if (history.length > 1 && !this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = true;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
        else if (history.length <= 1 && this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = false;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mHeader.styles = [styles];
__decorate([
    state()
], W3mHeader.prototype, "heading", void 0);
__decorate([
    state()
], W3mHeader.prototype, "buffering", void 0);
__decorate([
    state()
], W3mHeader.prototype, "showBack", void 0);
W3mHeader = __decorate([
    customElement('w3m-header')
], W3mHeader);
export { W3mHeader };
//# sourceMappingURL=index.js.map