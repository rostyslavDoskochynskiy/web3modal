import type { Web3ModalOptions } from '../src/client.js'
import { Web3Modal } from '../src/client.js'
import { ConstantsUtil } from '@web3modal/utils'

export type { Web3ModalOptions } from '../src/client.js'
export { defaultConfig } from '../src/utils/defaultConfig.js'

export function createWeb3Modal(options: Web3ModalOptions) {
  return new Web3Modal({ ...options, _sdkVersion: `html-ethers5-${ConstantsUtil.VERSION}` })
}
