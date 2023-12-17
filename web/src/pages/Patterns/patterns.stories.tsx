import type { StoryObj } from '@storybook/react'

import { Patterns } from '.'

export default {
  component: Patterns,
  title: 'Patterns page',
}

export const Default: StoryObj<typeof Patterns> = {
  render: () => <Patterns />,
}
