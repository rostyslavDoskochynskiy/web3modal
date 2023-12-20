'use client';
import { getWeb3Modal } from '@ridotto-io/w3-scaffold-react';
import { Web3Modal } from '../src/client.js';
import { ConstantsUtil } from '@ridotto-io/w3-scaffold-utils';
let modal = undefined;
export function createWeb3Modal(options) {
    if (!modal) {
        modal = new Web3Modal({
            ...options,
            _sdkVersion: `react-wagmi-${ConstantsUtil.VERSION}`
        });
        getWeb3Modal(modal);
    }
    return modal;
}
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents } from '@ridotto-io/w3-scaffold-react';
export { EIP6963Connector } from '../src/connectors/EIP6963Connector.js';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiReactConfig.js';
//# sourceMappingURL=react.js.map