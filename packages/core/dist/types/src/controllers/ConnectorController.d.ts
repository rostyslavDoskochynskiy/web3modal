import type { Connector } from '../utils/TypeUtil.js';
export interface ConnectorControllerState {
    connectors: Connector[];
}
export declare const ConnectorController: {
    state: ConnectorControllerState;
    subscribeKey<K extends "connectors">(key: K, callback: (value: ConnectorControllerState[K]) => void): () => void;
    setConnectors(connectors: ConnectorControllerState['connectors']): void;
    addConnector(connector: Connector): void;
    getConnectors(): Connector[];
};
