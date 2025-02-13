var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, AssetController, CoreHelperUtil, ModalController, NetworkController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let W3mAccountButton = class W3mAccountButton extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.networkImages = AssetController.state.networkImages;
        this.disabled = false;
        this.avatarSrc = undefined;
        this.balance = 'show';
        this.address = AccountController.state.address;
        this.balanceVal = AccountController.state.balance;
        this.balanceSymbol = AccountController.state.balanceSymbol;
        this.profileName = AccountController.state.profileName;
        this.profileImage = AccountController.state.profileImage;
        this.network = NetworkController.state.caipNetwork;
        this.unsubscribe.push(...[
            AccountController.subscribe(val => {
                if (val.isConnected) {
                    this.address = val.address;
                    this.balanceVal = val.balance;
                    this.profileName = val.profileName;
                    this.profileImage = val.profileImage;
                    this.balanceSymbol = val.balanceSymbol;
                }
                else {
                    this.address = '';
                    this.balanceVal = '';
                    this.profileName = '';
                    this.profileImage = '';
                    this.balanceSymbol = '';
                }
            }),
            NetworkController.subscribeKey('caipNetwork', val => (this.network = val))
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const networkImage = this.networkImages[this.network?.imageId ?? ''];
        const showBalance = this.balance === 'show';
        return html `
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${ifDefined(this.profileName ?? this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${ifDefined(networkImage)}
        avatarSrc=${ifDefined(this.avatarSrc)}
        balance=${showBalance
            ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol)
            : ''}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `;
    }
    onClick() {
        ModalController.open();
    }
};
__decorate([
    property({ type: Boolean })
], W3mAccountButton.prototype, "disabled", void 0);
__decorate([
    property()
], W3mAccountButton.prototype, "avatarSrc", void 0);
__decorate([
    property()
], W3mAccountButton.prototype, "balance", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "address", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "balanceVal", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "balanceSymbol", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "profileName", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "profileImage", void 0);
__decorate([
    state()
], W3mAccountButton.prototype, "network", void 0);
W3mAccountButton = __decorate([
    customElement('w3m-account-button')
], W3mAccountButton);
export { W3mAccountButton };
//# sourceMappingURL=index.js.map