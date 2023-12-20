var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@ridotto-io/w3-ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
import { ModalController } from '@ridotto-io/w3-core';
let W3mApproveTransactionView = class W3mApproveTransactionView extends LitElement {
    constructor() {
        super();
        this.bodyObserver = undefined;
        this.unsubscribe = [];
        this.iframe = document.getElementById('w3m-iframe');
        this.ready = false;
        this.unsubscribe.push(ModalController.subscribeKey('open', val => {
            if (!val) {
                this.onHideIframe();
            }
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.bodyObserver?.unobserve(window.document.body);
    }
    firstUpdated() {
        const verticalPadding = 10;
        const horizontalPadding = 24;
        this.iframe.style.display = 'block';
        const blueprint = this.renderRoot.querySelector('div');
        this.bodyObserver = new ResizeObserver(() => {
            const data = blueprint?.getBoundingClientRect();
            const dimensions = data ?? { left: 0, top: 0, width: 0, height: 0 };
            this.iframe.style.width = `${dimensions.width - horizontalPadding}px`;
            this.iframe.style.height = `${dimensions.height - verticalPadding}px`;
            this.iframe.style.left = `${dimensions.left + horizontalPadding / 2}px`;
            this.iframe.style.top = `${dimensions.top + verticalPadding / 2}px`;
            this.ready = true;
        });
        this.bodyObserver.observe(window.document.body);
    }
    render() {
        if (this.ready) {
            this.onShowIframe();
        }
        return html `<div data-ready=${this.ready}></div>`;
    }
    onShowIframe() {
        const isMobile = window.innerWidth <= 430;
        this.iframe.animate([
            { opacity: 0, transform: isMobile ? 'translateY(50px)' : 'scale(.95)' },
            { opacity: 1, transform: isMobile ? 'translateY(0)' : 'scale(1)' }
        ], { duration: 200, easing: 'ease', fill: 'forwards', delay: 300 });
    }
    async onHideIframe() {
        await this.iframe.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            easing: 'ease',
            fill: 'forwards'
        }).finished;
        this.iframe.style.display = 'none';
    }
};
W3mApproveTransactionView.styles = styles;
__decorate([
    state()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate([
    customElement('w3m-approve-transaction-view')
], W3mApproveTransactionView);
export { W3mApproveTransactionView };
//# sourceMappingURL=index.js.map