import type { StoryObj } from '@storybook/react'

import { Tests } from '.'

export default {
  component: Tests,
  title: 'Tests page',
}

export const Default: StoryObj<typeof Tests> = {
  render: () => <Tests />,
}
