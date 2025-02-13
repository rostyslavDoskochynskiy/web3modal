var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, AssetUtil, ModalController, NetworkController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let W3mNetworkButton = class W3mNetworkButton extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.disabled = false;
        this.network = NetworkController.state.caipNetwork;
        this.connected = AccountController.state.isConnected;
        this.unsubscribe.push(...[
            NetworkController.subscribeKey('caipNetwork', val => (this.network = val)),
            AccountController.subscribeKey('isConnected', val => (this.connected = val))
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return html `
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name ?? (this.connected ? 'Unknown Network' : 'Select Network')}
      </wui-network-button>
    `;
    }
    onClick() {
        ModalController.open({ view: 'Networks' });
    }
};
__decorate([
    property({ type: Boolean })
], W3mNetworkButton.prototype, "disabled", void 0);
__decorate([
    state()
], W3mNetworkButton.prototype, "network", void 0);
__decorate([
    state()
], W3mNetworkButton.prototype, "connected", void 0);
W3mNetworkButton = __decorate([
    customElement('w3m-network-button')
], W3mNetworkButton);
export { W3mNetworkButton };
//# sourceMappingURL=index.js.map