var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@ridotto-io/w3-ui';
import { LitElement, html } from 'lit';
import { RouterController, SnackController, ModalController, EventsController, ConnectionController, ConnectorController } from '@ridotto-io/w3-core';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
const OTP_LENGTH = 6;
let W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView extends LitElement {
    constructor() {
        super(...arguments);
        this.email = RouterController.state.data?.email;
        this.emailConnector = ConnectorController.getEmailConnector();
        this.loading = false;
    }
    render() {
        if (!this.email) {
            throw new Error('w3m-email-verify-otp-view: No email provided');
        }
        return html `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['l', '0', 'l', '0']}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading
            ? html `<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`
            : html `<wui-otp
              dissabled
              length="6"
              @inputChange=${this.onOtpInputChange.bind(this)}
            ></wui-otp>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)}>Resend code</wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    async onOtpInputChange(event) {
        try {
            if (!this.loading) {
                const otp = event.detail;
                if (this.emailConnector && otp.length === OTP_LENGTH) {
                    this.loading = true;
                    await this.emailConnector.provider.connectOtp({ otp });
                    await ConnectionController.connectExternal(this.emailConnector);
                    ModalController.close();
                    EventsController.sendEvent({
                        type: 'track',
                        event: 'CONNECT_SUCCESS',
                        properties: { method: 'email' }
                    });
                }
            }
        }
        catch (error) {
            SnackController.showError(error);
            this.loading = false;
        }
    }
    async onResendCode() {
        try {
            if (!this.loading) {
                const emailConnector = ConnectorController.getEmailConnector();
                if (!emailConnector || !this.email) {
                    throw new Error('w3m-email-login-widget: Unable to resend email');
                }
                this.loading = true;
                await emailConnector.provider.connectEmail({ email: this.email });
                SnackController.showSuccess('New Email sent');
            }
        }
        catch (error) {
            SnackController.showError(error);
        }
        finally {
            this.loading = false;
        }
    }
};
W3mEmailVerifyOtpView.styles = styles;
__decorate([
    state()
], W3mEmailVerifyOtpView.prototype, "loading", void 0);
W3mEmailVerifyOtpView = __decorate([
    customElement('w3m-email-verify-otp-view')
], W3mEmailVerifyOtpView);
export { W3mEmailVerifyOtpView };
//# sourceMappingURL=index.js.map