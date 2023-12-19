import type { Meta } from '@storybook/web-components'
import '@ridotto-io/w3-ui/src/components/wui-loading-thumbnail'
import type { WuiLoadingThumbnail } from '@ridotto-io/w3-ui/src/components/wui-loading-thumbnail'
import { html } from 'lit'

type Component = Meta<WuiLoadingThumbnail>

export default {
  title: 'Components/wui-loading-thumbnail',
  args: {
    radius: 36
  }
} as Component

export const Default: Component = {
  render: args => html` <wui-loading-thumbnail radius=${args.radius}></wui-loading-thumbnail>`
}
