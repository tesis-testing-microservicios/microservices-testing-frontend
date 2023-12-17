import type { StoryObj } from '@storybook/react'

import { Reports } from '.'

export default {
  component: Reports,
  title: 'Reports page',
}

export const Default: StoryObj<typeof Reports> = {
  render: () => <Reports />,
}
