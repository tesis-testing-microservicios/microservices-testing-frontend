import type { StoryObj } from '@storybook/react'

import { Implementations } from '.'

export default {
  component: Implementations,
  title: 'Implementations page',
}

export const Default: StoryObj<typeof Implementations> = {
  render: () => <Implementations />,
}
